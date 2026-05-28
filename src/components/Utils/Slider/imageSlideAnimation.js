/** Transición compartida entre Slider y ImageLightbox */
export const SLIDE_DURATION_MS = 480;
export const SLIDE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
export const SLIDE_OFFSET_PERCENT = 42;
export const SLIDE_INACTIVE_SCALE = 0.88;

export function getSlideOffset(index, activeIndex) {
  if (index === activeIndex) return 0;
  return index > activeIndex ? 1 : -1;
}

export function getInactiveSlideTransform(offset) {
  return `translate3d(${offset * SLIDE_OFFSET_PERCENT}%, 0, 0) scale(${SLIDE_INACTIVE_SCALE})`;
}

export const slideImageTransition = `transform ${SLIDE_DURATION_MS}ms ${SLIDE_EASING}, opacity ${SLIDE_DURATION_MS}ms ${SLIDE_EASING}`;
