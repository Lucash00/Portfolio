const PAGE_ENTER_CLASS = {
  slide: "md:animate-slideIn",
  "slide-page": "md:animate-slideInPage",
  fade: "md:animate-fadeIn",
};

const PAGE_ENTER_MS = {
  slide: 820,
  "slide-page": 1080,
  fade: 1000,
};

let pendingNavigationRestart = false;
let navigationScrollRevealHold = false;
let glowPauseTimer = 0;

export function markPageEnterNavigation() {
  pendingNavigationRestart = true;
}

export function beginNavigationScrollRevealHold() {
  navigationScrollRevealHold = true;
}

export function endNavigationScrollRevealHold() {
  navigationScrollRevealHold = false;
}

export function isNavigationScrollRevealHold() {
  return navigationScrollRevealHold;
}

export function isPageEnterBooting() {
  return (
    navigationScrollRevealHold ||
    document.documentElement.classList.contains("page-enter-boot")
  );
}

function shouldRestartPageEnter() {
  if (!pendingNavigationRestart) return false;
  pendingNavigationRestart = false;
  return true;
}

/** Reinicia slideIn / fadeIn (navegación o recarga). */
export function restartPageEnterAnimations(force = false) {
  if (!force && !shouldRestartPageEnter()) return;

  document.querySelectorAll("[data-page-enter]").forEach((el) => {
    if (!(el instanceof HTMLElement)) return;

    const mode = el.getAttribute("data-page-enter") || "slide";
    const animClass = PAGE_ENTER_CLASS[mode] ?? PAGE_ENTER_CLASS.slide;

    Object.values(PAGE_ENTER_CLASS).forEach((cls) => el.classList.remove(cls));
    void el.offsetWidth;
    el.classList.add(animClass);
  });
}

/** Espera a que termine la animación de entrada antes del scroll reveal. */
export function getPageEnterDelay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  if (window.matchMedia("(max-width: 639px)").matches) return 0;

  const roots = document.querySelectorAll("[data-page-enter]");
  if (!roots.length) return 0;

  let delay = 0;
  roots.forEach((el) => {
    const mode = el.getAttribute("data-page-enter") || "slide";
    delay = Math.max(delay, PAGE_ENTER_MS[mode] ?? PAGE_ENTER_MS.slide);
  });

  return delay;
}

/** Cuándo revelar cards/contenido en viewport (antes de que acabe slideIn). */
export function getScrollRevealStartDelay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  if (window.matchMedia("(max-width: 639px)").matches) return 0;
  return 120;
}

/**
 * Misma secuencia en recarga y en navegación SPA: prep, reinicio de animación,
 * quitar boot, glow pausado hasta que termine la entrada.
 */
export function finishPageEnterGlowPause() {
  if (glowPauseTimer) window.clearTimeout(glowPauseTimer);

  glowPauseTimer = window.setTimeout(() => {
    document.documentElement.classList.remove("glow-paused");
    document.documentElement.classList.add("glow-ready");
    endNavigationScrollRevealHold();
    glowPauseTimer = 0;
    window.dispatchEvent(new CustomEvent("portfolio:page-enter-complete"));
  }, getPageEnterDelay() + 100);
}

export function revealPageEnterContent() {
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("page-enter-boot", "is-route-changing");
    window.dispatchEvent(new CustomEvent("portfolio:after-route-swap"));
  });
}
