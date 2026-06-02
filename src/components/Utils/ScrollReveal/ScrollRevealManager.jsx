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

const SHOW_BOTTOM_INSET_VH = 0.08;
const SCROLL_DIRECTION_THRESHOLD_PX = 5;
const SHOW_TOP_EXTRA_PX = 28;
const HIDE_TOP_EXTRA_PX = 10;
const SHOW_BOTTOM_EXTRA_PX = 42;
const HIDE_BOTTOM_EXTRA_PX = 14;

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

function getThresholds(vh, topRevealInset) {
  const showBottomBase = vh * (1 - SHOW_BOTTOM_INSET_VH);
  return {
    showTop: topRevealInset + SHOW_TOP_EXTRA_PX,
    hideTop: topRevealInset + HIDE_TOP_EXTRA_PX,
    showBottom: showBottomBase + SHOW_BOTTOM_EXTRA_PX,
    hideBottom: showBottomBase + HIDE_BOTTOM_EXTRA_PX,
  };
}

function shouldShowHidden(rect, thresholds, direction) {
  if (direction === "up") {
    return rect.bottom > thresholds.showTop && rect.top < thresholds.showBottom;
  }
  return rect.top < thresholds.showBottom && rect.bottom > thresholds.showTop;
}

function shouldHideVisible(rect, vh, thresholds, direction) {
  if (direction === "down") return rect.bottom <= thresholds.hideTop;
  if (direction === "up") return rect.top >= thresholds.hideBottom;

  return rect.bottom < -24 || rect.top > vh + 24;
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

  elements.forEach((el) => {
    visibility.set(
      el,
      el.classList.contains("is-revealed") ? "visible" : "hidden",
    );
  });

  const show = (el, enterDirection) => {
    if (visibility.get(el) === "visible") return;
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
    if (visibility.get(el) !== "visible") return;
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

  const getExitDirection = () =>
    scrollDirection === "down" ? "up" : "down";

  const evaluateElement = (el, entry) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.classList.contains("scroll-reveal--settled")) return;

    const rect = entry?.boundingClientRect ?? el.getBoundingClientRect();
    const vh = window.innerHeight;
    const thresholds = getThresholds(vh, topRevealInset);
    const syntheticEntry = entry ?? { boundingClientRect: rect };
    const isVisible = visibility.get(el) === "visible";

    if (isVisible) {
      if (shouldHideVisible(rect, vh, thresholds, scrollDirection)) {
        hide(el, getExitDirection());
      }
      return;
    }

    if (!shouldShowHidden(rect, thresholds, scrollDirection)) return;

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
      observed.forEach((el) => evaluateElement(el));
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
