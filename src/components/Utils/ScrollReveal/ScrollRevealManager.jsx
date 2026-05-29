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

function clearDirectionClasses(el) {
  el.classList.remove(...DIRECTION_CLASSES);
}

function nextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
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

    if (delta > 3) scrollDirection = "down";
    else if (delta < -3) scrollDirection = "up";

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

  const show = async (el, enterDirection) => {
    if (visibility.get(el) === "visible") return;
    el.classList.remove("scroll-reveal--settled");
    clearDirectionClasses(el);
    el.classList.remove("is-revealed");
    el.classList.add(
      enterDirection === "up" ? "scroll-reveal--from-above" : "scroll-reveal--from-below",
    );

    await nextFrame();
    el.classList.add("is-revealed");
    visibility.set(el, "visible");
  };

  const hide = async (el, exitDirection) => {
    if (visibility.get(el) !== "visible") return;
    el.classList.remove("scroll-reveal--settled");
    clearDirectionClasses(el);
    el.classList.remove("is-revealed");

    await nextFrame();
    el.classList.add(
      exitDirection === "up" ? "scroll-reveal--exit-up" : "scroll-reveal--exit-down",
    );
    visibility.set(el, "hidden");
  };

  const topSafeZone = getTopSafeZone();
  const topRevealInset = getTopRevealInset();

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
    return enteringFromAbove ? 0.13 : 0.08;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (!(el instanceof HTMLElement)) return;

        if (entry.isIntersecting) {
          if (el.classList.contains("scroll-reveal--settled")) return;
          if (entry.intersectionRatio < getMinRevealRatio(entry)) return;
          show(el, getEnterDirection(entry));
          return;
        }

        if (el.classList.contains("is-revealed")) {
          hide(el, getExitDirection(entry));
        }
      });
    },
    {
      root: null,
      threshold: [0, 0.08, 0.13, 0.14, 0.22, 0.32],
      rootMargin: `-${topRevealInset}px 0px -6% 0px`,
    },
  );

  const observeAll = (list) => {
    list.forEach((el) => {
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

    const refreshScrollReveal = () => {
      disconnectObserver();
      prepScrollRevealState({ skipSettledShortcut: false });
      disconnectObserver = attachScrollRevealObserver(
        collectRevealElements(),
        attachLateRevealWatcher,
      );
    };

    const scheduleScrollReveal = () => {
      disconnectObserver();

      if (pageEnterTimer) window.clearTimeout(pageEnterTimer);

      prepScrollRevealState({ skipSettledShortcut: true });

      const startObserver = () => {
        endNavigationScrollRevealHold();
        refreshScrollReveal();
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

    scheduleScrollReveal();
    document.addEventListener("astro:page-load", scheduleScrollReveal);
    document.addEventListener("portfolio:page-enter-complete", refreshScrollReveal);

    return () => {
      disconnectObserver();
      if (pageEnterTimer) window.clearTimeout(pageEnterTimer);
      document.removeEventListener("astro:page-load", scheduleScrollReveal);
      document.removeEventListener(
        "portfolio:page-enter-complete",
        refreshScrollReveal,
      );
    };
  }, []);

  return null;
}
