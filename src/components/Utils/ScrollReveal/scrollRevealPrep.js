/**
 * Prep de scroll-reveal en navegación: oculta lo bajo el fold antes del fadeIn.
 */
import { isNavigationScrollRevealHold } from "./pageEnter.js";

const REVEAL_SELECTORS = [
  "[data-scroll-reveal]",
  ".scroll-reveal-item",
  "a.group",
  "main .grid.grid-cols-2 > *",
  "[data-scroll-reveal='on']",
].join(",");

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

function isHomePage() {
  return Boolean(document.querySelector('[data-page-enter="fade"]'));
}

/** Contacto al final de página: siempre reveal al scroll, nunca al entrar. */
function isContactRevealElement(el) {
  return Boolean(el.closest(".page-end, .contact-section"));
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
  if (style.display === "none") return true;
  if (style.visibility === "hidden" && !isContactRevealElement(el)) return true;

  return false;
}

function collectRevealElements(root = document) {
  const nodes = root.querySelectorAll(REVEAL_SELECTORS);
  const candidates = [...nodes].filter((el) => !isExcluded(el));

  return candidates.filter(
    (el) => !candidates.some((other) => other !== el && el.contains(other)),
  );
}

function getHeaderHeight() {
  const header = document.querySelector("#header, header.header, .header");
  return Math.ceil(header?.getBoundingClientRect().height ?? 0);
}

function getTopRevealInset() {
  const h = getHeaderHeight();
  return Math.max(88, h + 16);
}

function isInViewportOnInit(el, topInset) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  return rect.top < vh * 0.92 && rect.bottom > topInset;
}

function prepRevealElements(elements, { skipSettledShortcut = false } = {}) {
  if (!elements.length) return [];

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    elements.forEach((el) => {
      el.classList.add("scroll-reveal", "is-revealed", "scroll-reveal--settled");
    });
    return elements;
  }

  const hadPageEnter = Boolean(document.querySelector("[data-page-enter]"));
  const topRevealInset = getTopRevealInset();
  const allowSettledShortcut =
    !skipSettledShortcut && !isNavigationScrollRevealHold();

  elements.forEach((el) => {
    el.classList.remove(
      "scroll-reveal--from-below",
      "scroll-reveal--from-above",
      "scroll-reveal--exit-up",
      "scroll-reveal--exit-down",
      "is-revealed",
      "scroll-reveal--settled",
    );
    el.classList.add("scroll-reveal");

    const showWithPageEnter =
      allowSettledShortcut &&
      !isContactRevealElement(el) &&
      hadPageEnter &&
      isInViewportOnInit(el, topRevealInset);

    const showWithHomeEnter =
      isHomePage() &&
      !isContactRevealElement(el) &&
      isInViewportOnInit(el, topRevealInset);

    if (showWithPageEnter || showWithHomeEnter) {
      el.classList.add("is-revealed", "scroll-reveal--settled");
    } else {
      el.classList.add("scroll-reveal--from-below");
    }
  });

  return elements;
}

export function prepScrollRevealState(options = {}) {
  if (isExperiencePage()) return [];

  const skipSettledShortcut =
    options.skipSettledShortcut ?? isNavigationScrollRevealHold();

  const elements = collectRevealElements();
  return prepRevealElements(elements, { skipSettledShortcut });
}

/** Islands React (client:only) que montan después del swap. */
export function prepLateRevealElements(root) {
  if (isExperiencePage() || !(root instanceof HTMLElement)) return [];

  const fresh = collectRevealElements(root).filter(
    (el) => !el.classList.contains("scroll-reveal"),
  );
  // Islands client:only montan tarde; mostrar viewport al instante sin esperar slideIn.
  return prepRevealElements(fresh, {
    skipSettledShortcut: false,
  });
}

export { collectRevealElements };
