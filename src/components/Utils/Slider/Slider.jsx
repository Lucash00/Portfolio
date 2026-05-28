import { useState } from "react";
import { FiZoomIn } from "react-icons/fi";
import ImageLightbox from "../Lightbox/ImageLightbox";
import {
  getInactiveSlideTransform,
  getSlideOffset,
  slideImageTransition,
} from "./imageSlideAnimation";

const Slider = ({ images, lightboxLabel = "Galería" }) => {
  const validImages = (images ?? []).filter(
    (src) => typeof src === "string" && src.trim().length > 0,
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredDot, setHoveredDot] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = validImages.map((image, index) => ({
    key: index,
    content: image,
  }));

  const nextImage = (event) => {
    event?.stopPropagation?.();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevImage = (event) => {
    event?.stopPropagation?.();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index, event) => {
    event.stopPropagation();
    setCurrentIndex(index);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePreviewClick = (event) => {
    if (event.target.closest("[data-slider-control]")) return;
    openLightbox(currentIndex);
  };

  const handlePreviewKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openLightbox(currentIndex);
  };

  if (!slides.length) {
    return null;
  }

  const hasMultiple = slides.length > 1;

  return (
    <div className="relative w-full">
      <div
        className="group/lightbox-preview relative flex h-100 w-full min-h-[12rem] cursor-pointer items-center justify-center overflow-hidden rounded-[10px] bg-transparent"
        onClick={handlePreviewClick}
        onKeyDown={handlePreviewKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Ampliar ${lightboxLabel}`}
      >
        {slides.map((slide, i) => {
          const isActive = i === currentIndex;
          const offset = getSlideOffset(i, currentIndex);

          return (
            <img
              key={slide.key}
              src={slide.content}
              alt={`${lightboxLabel} ${i + 1}`}
              aria-hidden={!isActive}
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
              style={{
                borderRadius: "10px",
                zIndex: isActive ? 2 : 1,
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? "translate3d(0, 0, 0) scale(1)"
                  : getInactiveSlideTransform(offset),
                transition: slideImageTransition,
              }}
              draggable={false}
            />
          );
        })}

        <div
          className="pointer-events-none absolute inset-0 z-[3] hidden items-center justify-center rounded-[10px] bg-slate-900/0 transition-colors duration-300 group-hover/lightbox-preview:bg-slate-900/[0.06] md:flex"
          aria-hidden="true"
        >
          <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-white/95 text-blue-700 opacity-0 shadow-[0_8px_24px_rgba(29,78,216,0.2)] ring-2 ring-blue-500/25 backdrop-blur-sm transition-all duration-300 ease-out group-hover/lightbox-preview:scale-100 group-hover/lightbox-preview:opacity-100">
            <FiZoomIn className="h-7 w-7" strokeWidth={2.25} aria-hidden="true" />
          </span>
        </div>

        {hasMultiple && (
          <div
            className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-between"
            data-slider-control
          >
            <button
              type="button"
              data-slider-control
              className="pointer-events-auto flex sm:mx-1 md:mx-4 lg:mx-4 xl:mx-6 2xl:mx-6 sm:h-7 sm:w-7 md:h-10 md:w-10 items-center justify-center rounded-full border-none bg-gray-300 text-gray-700 transition-[color,background-color,transform] duration-[250ms] ease-out sm:active:scale-110 sm:active:bg-amber-400 sm:active:text-gray-800 md:hover:scale-110 md:hover:bg-amber-400 md:hover:text-gray-800"
              onClick={prevImage}
              aria-label="Imagen anterior"
            >
              {"<"}
            </button>
            <button
              type="button"
              data-slider-control
              className="pointer-events-auto flex sm:mx-1 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10 sm:h-7 sm:w-7 md:h-10 md:w-10 items-center justify-center rounded-full border-none bg-gray-300 text-gray-700 transition-[color,background-color,transform] duration-[250ms] ease-out sm:active:scale-110 sm:active:bg-amber-400 sm:active:text-gray-800 md:hover:scale-110 md:hover:bg-amber-400 md:hover:text-gray-800"
              onClick={nextImage}
              aria-label="Imagen siguiente"
            >
              {">"}
            </button>
          </div>
        )}
      </div>

      <p className="relative z-10 mt-2 text-center text-[10px] text-gray-400 sm:text-xs">
        Clic en la imagen para ampliar
      </p>

      {hasMultiple && (
        <div className="relative z-10 mt-3 flex justify-center">
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <button
                type="button"
                onClick={(event) => handleDotClick(index, event)}
                onMouseEnter={() => setHoveredDot(index)}
                onMouseLeave={() => setHoveredDot(null)}
                className={`mx-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 transition-all duration-75 ${
                  index === currentIndex ? "bg-gray-500" : "bg-gray-300"
                }`}
                style={{
                  width: index === currentIndex ? "12px" : "10px",
                  height: index === currentIndex ? "12px" : "10px",
                  transform: hoveredDot === index ? "scale(1.5)" : "scale(1)",
                }}
                aria-label={`Ir a imagen ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
              />
              {hoveredDot === index && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openLightbox(index);
                  }}
                  className="absolute bottom-full left-1/2 z-50 mb-2 h-40 w-40 -translate-x-1/2 cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-gray-100 p-1 shadow-lg"
                  aria-label={`Ampliar imagen ${index + 1}`}
                >
                  <img
                    src={slide.content}
                    alt={`Miniatura ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <ImageLightbox
        images={validImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        label={lightboxLabel}
      />
    </div>
  );
};

export default Slider;
