import { useEffect } from "react";
import "../../../styles/scrollReveal.css";
import { getPageEnterDelay } from "./pageEnter";

const REVEAL_SELECTORS = [
  "[data-scroll-reveal]",
  ".scroll-reveal-item",
  "a.group",
  "main .grid.grid-cols-2 > *",
  "[data-scroll-reveal='on']",
].join(",");

const DIRECTION_CLASSES = [
  "scroll-reveal--from-below",
  "scroll-reveal--from-above",
  "scroll-reveal--exit-up",
  "scroll-reveal--exit-down",
];

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "LINK",
  "META",
  "NOSCRIPT",
  "ASTRO-ISLAND",
]);

function isExperiencePage() {
  return /^\/experiencia\/?$/i.test(window.location.pathname);
}

function isExcluded(el) {
  if (!(el instanceof HTMLElement)) return true;
  if (SKIP_TAGS.has(el.tagName)) return true;
  if (el.closest('[data-scroll-reveal="off"]')) return true;
  if (el.closest("[data-scroll-reveal-zone='exclude']")) return true;
  if (el.closest("#header, header, .side-menu, .header")) return true;
  if (el.closest(".lightbox-root, .about-avatar-flyer")) return true;
  if (el.hasAttribute("data-no-scroll-reveal")) return true;

  const style = getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden") return true;

  return false;
}

function collectRevealElements() {
  const nodes = document.querySelectorAll(REVEAL_SELECTORS);
  const candidates = [...nodes].filter((el) => !isExcluded(el));

  return candidates.filter(
    (el) => !candidates.some((other) => other !== el && el.contains(other)),
  );
}

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

/** Entrada desde arriba: un poco antes para no dejar hueco vacío. */
function getTopRevealInset() {
  const h = getHeaderHeight();
  return Math.max(88, h + 16);
}

/** Salida hacia arriba: más tarde para que se vea la animación bajo el menú. */
function getTopSafeZone() {
  const h = getHeaderHeight();
  return Math.max(112, h + 40);
}

function isInViewportOnInit(el, topInset) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  return rect.top < vh * 0.92 && rect.bottom > topInset;
}

function initScrollReveal() {
  if (isExperiencePage()) return () => {};

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const elements = collectRevealElements();
  if (!elements.length) return () => {};

  if (reducedMotion) {
    elements.forEach((el) => el.classList.add("scroll-reveal", "is-revealed"));
    return () => {};
  }

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
  const hadPageEnter = Boolean(document.querySelector("[data-page-enter]"));

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

    // Salida hacia arriba: solo cuando ya pasó la zona del menú
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

  elements.forEach((el) => {
    const alreadyVisible =
      hadPageEnter && isInViewportOnInit(el, topRevealInset);

    el.classList.add("scroll-reveal");

    if (alreadyVisible) {
      el.classList.add("is-revealed", "scroll-reveal--settled");
      visibility.set(el, "visible");
    } else {
      el.classList.add("scroll-reveal--from-below");
    }

    observer.observe(el);
  });

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", onScroll);
  };
}

export default function ScrollRevealManager() {
  useEffect(() => {
    let disconnectObserver = () => {};
    let pageEnterTimer = 0;

    const scheduleScrollReveal = () => {
      disconnectObserver();

      if (pageEnterTimer) window.clearTimeout(pageEnterTimer);

      const delay = getPageEnterDelay();
      pageEnterTimer = window.setTimeout(() => {
        disconnectObserver = initScrollReveal();
      }, delay);
    };

    scheduleScrollReveal();
    document.addEventListener("astro:page-load", scheduleScrollReveal);

    return () => {
      disconnectObserver();
      if (pageEnterTimer) window.clearTimeout(pageEnterTimer);
      document.removeEventListener("astro:page-load", scheduleScrollReveal);
    };
  }, []);

  return null;
}
