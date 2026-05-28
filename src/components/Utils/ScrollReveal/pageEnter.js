const PAGE_ENTER_CLASS = {
  slide: "md:animate-slideIn",
  fade: "md:animate-fadeIn",
};

const PAGE_ENTER_MS = {
  slide: 820,
  fade: 1000,
};

/** Reinicia slideIn / fadeIn solo en navegación real (no en la primera carga). */
export function restartPageEnterAnimations() {
  if (!shouldRestartPageEnter()) return;

  document.querySelectorAll("[data-page-enter]").forEach((el) => {
    if (!(el instanceof HTMLElement)) return;

    const mode = el.getAttribute("data-page-enter") || "slide";
    const animClass = PAGE_ENTER_CLASS[mode] ?? PAGE_ENTER_CLASS.slide;

    Object.values(PAGE_ENTER_CLASS).forEach((cls) => el.classList.remove(cls));
    void el.offsetWidth;
    el.classList.add(animClass);
  });
}

let pendingNavigationRestart = false;

export function markPageEnterNavigation() {
  pendingNavigationRestart = true;
}

function shouldRestartPageEnter() {
  if (!pendingNavigationRestart) return false;
  pendingNavigationRestart = false;
  return true;
}

/** Espera a que termine la animación de entrada antes del scroll reveal. */
export function getPageEnterDelay() {
  const roots = document.querySelectorAll("[data-page-enter]");
  if (!roots.length) return 0;

  let delay = 0;
  roots.forEach((el) => {
    const mode = el.getAttribute("data-page-enter") || "slide";
    delay = Math.max(delay, PAGE_ENTER_MS[mode] ?? PAGE_ENTER_MS.slide);
  });

  return delay;
}
