import { useEffect } from "react";
import "../../../styles/scrollReveal.css";
import {
  endNavigationScrollRevealHold,
  getScrollRevealStartDelay,
} from "./pageEnter";
import {
  collectRevealElements,
  prepLateRevealElements,
  prepScrollRevealState,
} from "./scrollRevealPrep.js";

const DIRECTION_CLASSES = [
  "scroll-reveal--from-below",
  "scroll-reveal--from-above",
  "scroll-reveal--exit-up",
  "scroll-reveal--exit-down",
];

const SHOW_BOTTOM_INSET_VH = 0.06;
const HIDE_EXTRA_TOP_PX = 56;
/** Ocultar más abajo (más tarde al salir por el borde inferior). */
const HIDE_BOTTOM_BELOW_VIEWPORT_PX = 48;
const REVEAL_TRANSITION_MS = 700;
const SCROLL_DIRECTION_THRESHOLD_PX = 5;

function clearDirectionClasses(el) {
  el.classList.remove(...DIRECTION_CLASSES);
}

function forceReflow(el) {
  void el.offsetHeight;
}

function getHeaderHeight() {
  const header = document.querySelector("#header, header.header, .header");
  return Math.ceil(header?.getBoundingClientRect().height ?? 0);
}

function getTopRevealInset() {
  const h = getHeaderHeight();
  return Math.max(88, h + 16);
}

function getTopSafeZone() {
  const h = getHeaderHeight();
  return Math.max(112, h + 40);
}

function getShowBounds(vh, topRevealInset) {
  return {
    top: topRevealInset,
    bottom: vh * (1 - SHOW_BOTTOM_INSET_VH),
  };
}

function getHideBounds(vh, topRevealInset) {
  return {
    top: topRevealInset + HIDE_EXTRA_TOP_PX,
    bottom: vh + HIDE_BOTTOM_BELOW_VIEWPORT_PX,
  };
}

function isInShowBounds(rect, vh, topRevealInset) {
  const { top, bottom } = getShowBounds(vh, topRevealInset);
  return rect.bottom > top && rect.top < bottom;
}

function shouldHideVisible(rect, vh, topRevealInset, direction) {
  const { top: hideTop, bottom: hideBottom } = getHideBounds(vh, topRevealInset);

  if (direction === "up" && rect.bottom < hideTop) return true;
  if (direction === "down" && rect.top > hideBottom) return true;

  if (rect.bottom < -24 || rect.top > vh + 24) return true;

  return false;
}

function shouldShowHidden(rect, vh, topRevealInset, direction) {
  if (!isInShowBounds(rect, vh, topRevealInset)) return false;

  const show = getShowBounds(vh, topRevealInset);
  const hide = getHideBounds(vh, topRevealInset);

  if (direction === "down") {
    return rect.bottom > show.top;
  }

  if (direction === "up") {
    if (rect.bottom < hide.top) return false;
    return rect.top < show.bottom;
  }

  return true;
}

function estimateIntersectionRatio(rect, vh, topRevealInset) {
  const { top, bottom } = getShowBounds(vh, topRevealInset);
  const visibleTop = Math.max(rect.top, top);
  const visibleBottom = Math.min(rect.bottom, bottom);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  return rect.height > 0 ? visibleHeight / rect.height : 0;
}

function attachScrollRevealObserver(elements, onNeedMore) {
  if (!elements.length && !onNeedMore) return () => {};

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) return () => {};

  let lastScrollY = window.scrollY;
  let scrollDirection = "down";

  const onScroll = () => {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY;

    if (delta > SCROLL_DIRECTION_THRESHOLD_PX) scrollDirection = "down";
    else if (delta < -SCROLL_DIRECTION_THRESHOLD_PX) scrollDirection = "up";

    lastScrollY = currentY;
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  const visibility = new WeakMap();
  const animating = new WeakSet();

  elements.forEach((el) => {
    visibility.set(
      el,
      el.classList.contains("is-revealed") ? "visible" : "hidden",
    );
  });

  const lockAnimation = (el) => {
    animating.add(el);
    window.setTimeout(() => {
      animating.delete(el);
      if (visibility.get(el) === "visible" && el.classList.contains("is-revealed")) {
        clearDirectionClasses(el);
      }
    }, REVEAL_TRANSITION_MS);
  };

  const show = (el, enterDirection) => {
    if (visibility.get(el) === "visible" || animating.has(el)) return;

    lockAnimation(el);
    el.classList.remove("scroll-reveal--settled");
    clearDirectionClasses(el);
    el.classList.remove("is-revealed");
    el.classList.add(
      enterDirection === "up" ? "scroll-reveal--from-above" : "scroll-reveal--from-below",
    );

    forceReflow(el);

    requestAnimationFrame(() => {
      el.classList.add("is-revealed");
      visibility.set(el, "visible");
    });
  };

  const hide = (el, exitDirection) => {
    if (visibility.get(el) !== "visible" || animating.has(el)) return;

    lockAnimation(el);
    el.classList.remove("scroll-reveal--settled");
    clearDirectionClasses(el);
    el.classList.remove("is-revealed");

    forceReflow(el);

    requestAnimationFrame(() => {
      el.classList.add(
        exitDirection === "up" ? "scroll-reveal--exit-up" : "scroll-reveal--exit-down",
      );
      visibility.set(el, "hidden");
    });
  };

  const topSafeZone = getTopSafeZone();
  const topRevealInset = getTopRevealInset();
  const observed = new Set(elements);

  const getEnterDirection = (entry) => {
    const { top, bottom } = entry.boundingClientRect;
    const vh = window.innerHeight;

    if (scrollDirection === "down") return "down";
    if (scrollDirection === "up") return "up";
    if (top < topRevealInset + vh * 0.08) return "up";
    if (bottom > vh * 0.6) return "down";
    return "down";
  };

  const getExitDirection = (entry) => {
    const { top, bottom } = entry.boundingClientRect;
    const vh = window.innerHeight;

    if (bottom < 0 || top < -topSafeZone * 0.35) return "up";
    if (top > vh || bottom > vh * 1.05) return "down";

    return scrollDirection === "down" ? "up" : "down";
  };

  const getMinRevealRatio = (entry) => {
    const { top } = entry.boundingClientRect;
    const enteringFromAbove =
      scrollDirection === "up" || top < topRevealInset + 36;
    return enteringFromAbove ? 0.12 : 0.05;
  };

  const evaluateElement = (el, entry) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.classList.contains("scroll-reveal--settled")) return;
    if (animating.has(el)) return;

    const rect = entry?.boundingClientRect ?? el.getBoundingClientRect();
    const vh = window.innerHeight;
    const syntheticEntry = entry ?? {
      boundingClientRect: rect,
      isIntersecting: isInShowBounds(rect, vh, topRevealInset),
      intersectionRatio: estimateIntersectionRatio(rect, vh, topRevealInset),
    };
    const isVisible = visibility.get(el) === "visible";

    if (isVisible) {
      if (shouldHideVisible(rect, vh, topRevealInset, scrollDirection)) {
        hide(el, getExitDirection(syntheticEntry));
      }
      return;
    }

    if (
      !syntheticEntry.isIntersecting &&
      !isInShowBounds(rect, vh, topRevealInset)
    ) {
      return;
    }
    if (syntheticEntry.intersectionRatio < getMinRevealRatio(syntheticEntry)) {
      return;
    }
    if (!shouldShowHidden(rect, vh, topRevealInset, scrollDirection)) return;

    show(el, getEnterDirection(syntheticEntry));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => evaluateElement(entry.target, entry));
    },
    {
      root: null,
      threshold: [0, 0.05, 0.1, 0.15, 0.25],
      rootMargin: `-${topRevealInset}px 0px -${SHOW_BOTTOM_INSET_VH * 100}% 0px`,
    },
  );

  let scrollCheckRaf = 0;
  const onScrollVisibilityCheck = () => {
    if (scrollCheckRaf) return;
    scrollCheckRaf = requestAnimationFrame(() => {
      scrollCheckRaf = 0;
      observed.forEach((el) => {
        if (!animating.has(el)) evaluateElement(el);
      });
    });
  };

  window.addEventListener("scroll", onScrollVisibilityCheck, { passive: true });

  const observeAll = (list) => {
    list.forEach((el) => {
      observed.add(el);
      visibility.set(
        el,
        el.classList.contains("is-revealed") ? "visible" : "hidden",
      );
      observer.observe(el);
    });
  };

  observeAll(elements);

  let lateObserver = () => {};
  if (onNeedMore) {
    lateObserver = onNeedMore((added) => {
      observeAll(added);
    });
  }

  return () => {
    observer.disconnect();
    lateObserver();
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("scroll", onScrollVisibilityCheck);
    if (scrollCheckRaf) cancelAnimationFrame(scrollCheckRaf);
  };
}

function attachLateRevealWatcher(onAdded) {
  const roots = [
    ...document.querySelectorAll("[data-page-enter], .page-end"),
  ];
  if (!roots.length) return () => {};

  const observer = new MutationObserver((mutations) => {
    const touched = new Set();

    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        prepLateRevealElements(node).forEach((el) => touched.add(el));
      });
    });

    if (touched.size) onAdded([...touched]);
  });

  roots.forEach((root) => {
    observer.observe(root, { childList: true, subtree: true });
  });

  return () => observer.disconnect();
}

export default function ScrollRevealManager() {
  useEffect(() => {
    let disconnectObserver = () => {};
    let pageEnterTimer = 0;
    let scrollRevealScheduled = false;
    let spaNavigation = false;

    const attachObserver = () => {
      endNavigationScrollRevealHold();
      disconnectObserver();
      disconnectObserver = attachScrollRevealObserver(
        collectRevealElements(),
        attachLateRevealWatcher,
      );
    };

    const scheduleScrollReveal = () => {
      scrollRevealScheduled = true;
      disconnectObserver();

      if (pageEnterTimer) window.clearTimeout(pageEnterTimer);

      prepScrollRevealState({ skipSettledShortcut: true });

      const startObserver = () => {
        attachObserver();
      };

      const bootDone =
        !document.documentElement.classList.contains("page-enter-boot") &&
        !document.documentElement.classList.contains("is-route-changing");

      if (document.documentElement.classList.contains("glow-ready") || bootDone) {
        startObserver();
        return;
      }

      const onPageVisible = () => {
        if (pageEnterTimer) window.clearTimeout(pageEnterTimer);
        pageEnterTimer = window.setTimeout(startObserver, getScrollRevealStartDelay());
      };

      document.addEventListener("portfolio:after-route-swap", onPageVisible, {
        once: true,
      });

      pageEnterTimer = window.setTimeout(() => {
        document.removeEventListener("portfolio:after-route-swap", onPageVisible);
        startObserver();
      }, getScrollRevealStartDelay() + 250);
    };

    const onPageEnterComplete = () => {
      endNavigationScrollRevealHold();
    };

    const onBeforeSwap = () => {
      spaNavigation = true;
      scrollRevealScheduled = false;
    };

    const onPageLoad = () => {
      if (spaNavigation) {
        spaNavigation = false;
        scheduleScrollReveal();
        return;
      }
      if (!scrollRevealScheduled) {
        scheduleScrollReveal();
      }
    };

    scheduleScrollReveal();

    document.addEventListener("astro:before-swap", onBeforeSwap);
    document.addEventListener("astro:page-load", onPageLoad);
    document.addEventListener("portfolio:page-enter-complete", onPageEnterComplete);

    return () => {
      disconnectObserver();
      if (pageEnterTimer) window.clearTimeout(pageEnterTimer);
      document.removeEventListener("astro:before-swap", onBeforeSwap);
      document.removeEventListener("astro:page-load", onPageLoad);
      document.removeEventListener(
        "portfolio:page-enter-complete",
        onPageEnterComplete,
      );
    };
  }, []);

  return null;
}
