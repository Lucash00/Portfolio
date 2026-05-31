const PAGE_ENTER_CLASS = {
  slide: "animate-slideIn",
  "slide-page": "animate-slideInPage",
  fade: "animate-fadeIn",
};

const PAGE_ENTER_CLASS_LEGACY = [
  "animate-slideIn",
  "animate-slideInPage",
  "animate-fadeIn",
  "md:animate-slideIn",
  "md:animate-slideInPage",
  "md:animate-fadeIn",
];

const PAGE_ENTER_MS = {
  slide: 820,
  "slide-page": 1080,
  fade: 1000,
};

let pendingNavigationRestart = false;
let navigationScrollRevealHold = false;
let glowPauseTimer = 0;
let heroRotatorSpaResetPending = false;

export function markHeroRotatorSpaReset() {
  heroRotatorSpaResetPending = true;
}

export function takeHeroRotatorSpaReset() {
  const pending = heroRotatorSpaResetPending;
  heroRotatorSpaResetPending = false;
  return pending;
}

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
    const hadAnim = PAGE_ENTER_CLASS_LEGACY.some((cls) =>
      el.classList.contains(cls),
    );

    if (force && hadAnim && mode === "fade") {
      const running = el
        .getAnimations?.()
        .some(
          (anim) =>
            anim.playState === "running" &&
            (anim.animationName?.includes("fadeIn") ||
              anim.animationName?.includes("fade")),
        );
      if (running) return;
    }

    PAGE_ENTER_CLASS_LEGACY.forEach((cls) => el.classList.remove(cls));
    if (hadAnim) {
      void el.offsetWidth;
    }
    el.classList.add(animClass);
  });
}

/** Espera a que termine la animación de entrada antes del scroll reveal. */
export function getPageEnterDelay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;

  const roots = document.querySelectorAll("[data-page-enter]");
  if (!roots.length) return 0;

  let delay = 0;
  roots.forEach((el) => {
    const mode = el.getAttribute("data-page-enter") || "slide";
    delay = Math.max(delay, PAGE_ENTER_MS[mode] ?? PAGE_ENTER_MS.slide);
  });

  return delay;
}

/** Cuándo revelar cards/contenido en viewport (después de arrancar la entrada). */
export function getScrollRevealStartDelay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  return 80;
}

/**
 * Misma secuencia en recarga y en navegación SPA: prep, reinicio de animación,
 * quitar boot, glow pausado hasta que termine la entrada.
 */
export function finishPageEnterGlowPause() {
  if (glowPauseTimer) window.clearTimeout(glowPauseTimer);

  glowPauseTimer = window.setTimeout(() => {
    document.documentElement.classList.remove(
      "glow-paused",
      "page-enter-revealing",
    );
    document.documentElement.classList.add("glow-ready");
    endNavigationScrollRevealHold();
    glowPauseTimer = 0;
    window.dispatchEvent(new CustomEvent("portfolio:page-enter-complete"));
  }, getPageEnterDelay() + 100);
}

/** Muestra el contenido principal; contacto/footer esperan a page-enter-revealing. */
export function revealPageEnterContent() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove(
        "page-enter-boot",
        "is-route-changing",
      );
      document.documentElement.classList.add("page-enter-revealing");
      restartPageEnterAnimations(true);
      window.dispatchEvent(new CustomEvent("portfolio:after-route-swap"));
    });
  });
}
