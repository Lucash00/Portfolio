import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  getInactiveSlideTransform,
  getSlideOffset,
  slideImageTransition,
} from "../Slider/imageSlideAnimation";

const MIN_SCALE = 1;
const MAX_SCALE = 3;
const SCALE_STEP = 0.2;
const DOUBLE_TAP_MS = 320;
const DOUBLE_TAP_DIST = 32;
const DOUBLE_TAP_ZOOM = 1.5;

export default function ImageLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  label = "Vista ampliada",
}) {
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const dragDelta = useRef({ x: 0, y: 0 });
  const lastTap = useRef({ time: 0, x: 0, y: 0 });
  const suppressNextDoubleClick = useRef(false);
  const stageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const hasMultiple = images.length > 1;
  const hasZoom = scale > MIN_SCALE;
  const hideChrome = isMobile && hasZoom;
  const SWIPE_THRESHOLD = 52;

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  const toggleDoubleTapZoom = useCallback(() => {
    setIsDragging(false);
    setScale((current) => {
      if (current > MIN_SCALE + 0.02) {
        setPosition({ x: 0, y: 0 });
        return MIN_SCALE;
      }
      setPosition({ x: 0, y: 0 });
      return DOUBLE_TAP_ZOOM;
    });
  }, []);

  const handlePointerTapZoom = useCallback(
    (clientX, clientY) => {
      const now = Date.now();
      const prev = lastTap.current;
      const dt = now - prev.time;
      const dist = Math.hypot(clientX - prev.x, clientY - prev.y);

      if (dt > 0 && dt < DOUBLE_TAP_MS && dist < DOUBLE_TAP_DIST) {
        lastTap.current = { time: 0, x: 0, y: 0 };
        suppressNextDoubleClick.current = true;
        window.setTimeout(() => {
          suppressNextDoubleClick.current = false;
        }, 450);
        toggleDoubleTapZoom();
        return true;
      }

      lastTap.current = { time: now, x: clientX, y: clientY };
      return false;
    },
    [toggleDoubleTapZoom],
  );

  const onDoubleClick = (event) => {
    event.preventDefault();
    if (suppressNextDoubleClick.current) return;
    toggleDoubleTapZoom();
  };

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
    resetView();
  }, [images.length, resetView]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    resetView();
  }, [images.length, resetView]);

  const handleClose = useCallback(() => {
    setVisible(false);
    window.setTimeout(onClose, 280);
  }, [onClose]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    setIndex(initialIndex);
    resetView();
    setMounted(true);
    const frame = requestAnimationFrame(() => setVisible(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, initialIndex, resetView]);

  useEffect(() => {
    if (!isOpen) {
      const timer = window.setTimeout(() => setMounted(false), 300);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }
      if (event.key === "ArrowRight" && hasMultiple) goNext();
      if (event.key === "ArrowLeft" && hasMultiple) goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, hasMultiple, goNext, goPrev, handleClose]);

  const zoomIn = () => {
    setScale((value) => Math.min(MAX_SCALE, +(value + SCALE_STEP).toFixed(2)));
  };

  const zoomOut = () => {
    setScale((value) => {
      const next = Math.max(MIN_SCALE, +(value - SCALE_STEP).toFixed(2));
      if (next <= MIN_SCALE) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const onWheel = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const onPointerDown = (event) => {
    if (event.button !== 0) return;
    if (
      event.target.closest(
        ".lightbox-stage-nav, .lightbox-nav, .lightbox-control, .lightbox-close",
      )
    ) {
      return;
    }

    event.preventDefault();
    stageRef.current?.setPointerCapture(event.pointerId);
    setIsDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      posX: position.x,
      posY: position.y,
    };
    dragDelta.current = { x: 0, y: 0 };
  };

  const onPointerMove = (event) => {
    if (!isDragging) return;

    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;
    dragDelta.current = { x: dx, y: dy };

    if (isMobile && !hasZoom) return;

    setPosition({
      x: dragStart.current.posX + dx,
      y: dragStart.current.posY + dy,
    });
  };

  const endDrag = (event) => {
    if (!isDragging) return;
    if (event.pointerId !== undefined) {
      stageRef.current?.releasePointerCapture(event.pointerId);
    }

    const dx = dragDelta.current.x;
    const dy = dragDelta.current.y;
    dragDelta.current = { x: 0, y: 0 };
    setIsDragging(false);

    if (isMobile && !hasZoom && hasMultiple) {
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.15) {
        if (dx < 0) goNext();
        else goPrev();
      } else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
        handlePointerTapZoom(event.clientX, event.clientY);
      }
      setPosition({ x: 0, y: 0 });
      return;
    }

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      handlePointerTapZoom(event.clientX, event.clientY);
    }

    if (!hasZoom) {
      setPosition({ x: 0, y: 0 });
    }
  };

  if ((!isOpen && !mounted) || images.length === 0) {
    return null;
  }

  const stageCursor = isDragging ? "grabbing" : "grab";
  const panTransition = isDragging ? "none" : "transform 0.2s ease-out";

  return createPortal(
    <div
      className={`lightbox-root fixed inset-0 z-[10000] transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div
        className={`lightbox-panel fixed inset-0 flex flex-col overflow-hidden bg-gray-100 transition-transform duration-300 ease-out ${
          visible ? "scale-100" : "scale-[0.99]"
        }${hideChrome ? " lightbox-panel--zoomed" : ""}`}
      >
        <div
          className={`lightbox-toolbar relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-6${
            hideChrome ? " lightbox-toolbar--hidden" : ""
          }`}
        >
          <p className="text-xs font-semibold text-gray-500 sm:text-sm tabular-nums">
            {hasMultiple ? `${index + 1} / ${images.length}` : label}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
              className="lightbox-control"
              aria-label="Alejar"
            >
              −
            </button>
            <span className="min-w-[3rem] text-center text-xs font-medium text-gray-500 tabular-nums">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
              className="lightbox-control"
              aria-label="Acercar"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="lightbox-close ml-1 sm:ml-2"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="lightbox-stage-row relative flex min-h-0 min-w-0 flex-1 items-stretch overflow-hidden">
          {hasMultiple && !isMobile ? (
            <button
              type="button"
              onClick={goPrev}
              className="lightbox-nav lightbox-nav-side flex"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
          ) : null}

          <div
            ref={stageRef}
            className="lightbox-stage relative min-h-0 min-w-0 flex-1 overflow-hidden touch-none"
            style={{ cursor: isMobile && !hasZoom ? "default" : stageCursor }}
            onWheel={onWheel}
            onDoubleClick={onDoubleClick}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {hasMultiple && !isMobile ? (
              <>
                <button
                  type="button"
                  className="lightbox-stage-nav lightbox-stage-nav--prev"
                  onClick={goPrev}
                  aria-label="Imagen anterior"
                />
                <button
                  type="button"
                  className="lightbox-stage-nav lightbox-stage-nav--next"
                  onClick={goNext}
                  aria-label="Imagen siguiente"
                />
              </>
            ) : null}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {images.map((src, i) => {
                const isActive = i === index;
                const offset = getSlideOffset(i, index);

                return (
                  <img
                    key={`${src}-${i}`}
                    src={src}
                    alt={`${label} ${i + 1}`}
                    aria-hidden={!isActive}
                    className="lightbox-image absolute max-h-full max-w-full select-none object-contain"
                    style={{
                      zIndex: isActive ? (hideChrome ? 50 : 2) : 1,
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? `translate(${position.x}px, ${position.y}px) scale(${scale})`
                        : getInactiveSlideTransform(offset),
                      transition: isActive
                        ? `${slideImageTransition}, ${panTransition}`
                        : slideImageTransition,
                    }}
                    draggable={false}
                  />
                );
              })}
            </div>
          </div>

          {hasMultiple && !isMobile ? (
            <button
              type="button"
              onClick={goNext}
              className="lightbox-nav lightbox-nav-side flex"
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          ) : null}
        </div>

        <p
          className={`lightbox-footer relative z-20 shrink-0 border-t border-slate-200 px-4 py-2.5 text-center text-[10px] text-gray-500 sm:text-xs${
            hideChrome ? " lightbox-footer--hidden" : ""
          }`}
        >
          {isMobile
            ? "Desliza para cambiar · +/- zoom · Doble toque: 150% o restablecer · ESC cierra"
            : "Rueda o +/- para zoom · Arrastra para mover · Doble clic/toque: 150% o restablecer · ESC cierra"}
        </p>
      </div>

      <style>{`
        .lightbox-control,
        .lightbox-nav,
        .lightbox-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: none;
          background: #d1d5db;
          color: #374151;
          transition:
            color 0.25s ease,
            background-color 0.25s ease,
            transform 0.25s ease;
        }

        .lightbox-control {
          width: 2rem;
          height: 2rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .lightbox-control:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .lightbox-control:not(:disabled):hover,
        .lightbox-nav:hover,
        .lightbox-close:hover {
          color: #1f2937;
          background: #fbbf24;
          transform: scale(1.08);
        }

        .lightbox-nav {
          width: 2.5rem;
          height: 2.5rem;
          font-size: 1.75rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .lightbox-nav-side {
          align-self: center;
          margin: 0 0.5rem;
          position: relative;
          z-index: 30;
        }

        .lightbox-stage-nav {
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 15;
          width: 28%;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .lightbox-stage-nav--prev {
          left: 0;
        }

        .lightbox-stage-nav--next {
          right: 0;
        }

        .lightbox-close {
          width: 2.25rem;
          height: 2.25rem;
          font-size: 1rem;
        }

        @media (max-width: 639px) {
          .lightbox-panel {
            overflow: hidden;
          }

          .lightbox-nav-side,
          .lightbox-stage-nav {
            display: none !important;
          }

          .lightbox-stage-row {
            width: 100%;
            min-width: 0;
          }

          .lightbox-stage {
            width: 100%;
            min-width: 0;
          }

          .lightbox-image {
            max-width: 100% !important;
            max-height: 100% !important;
          }

          .lightbox-panel--zoomed .lightbox-toolbar,
          .lightbox-panel--zoomed .lightbox-footer,
          .lightbox-toolbar--hidden,
          .lightbox-footer--hidden {
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }

          .lightbox-panel--zoomed .lightbox-stage {
            position: fixed;
            inset: 0;
            z-index: 45;
            background: #f3f4f6;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lightbox-root,
          .lightbox-panel,
          .lightbox-image {
            transition: none !important;
          }

          .lightbox-control:not(:disabled):hover,
          .lightbox-nav:hover,
          .lightbox-close:hover {
            transform: none;
          }
        }
      `}</style>
    </div>,
    document.body,
  );
}
