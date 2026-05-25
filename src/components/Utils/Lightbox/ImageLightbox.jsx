import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MIN_SCALE = 1;
const MAX_SCALE = 3;
const SCALE_STEP = 0.2;

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
  const stageRef = useRef(null);

  const hasMultiple = images.length > 1;
  const currentSrc = images[index];
  const hasZoom = scale > MIN_SCALE;

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

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

    event.preventDefault();
    stageRef.current?.setPointerCapture(event.pointerId);
    setIsDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      posX: position.x,
      posY: position.y,
    };
  };

  const onPointerMove = (event) => {
    if (!isDragging) return;

    setPosition({
      x: dragStart.current.posX + (event.clientX - dragStart.current.x),
      y: dragStart.current.posY + (event.clientY - dragStart.current.y),
    });
  };

  const endDrag = (event) => {
    if (!isDragging) return;
    if (event.pointerId !== undefined) {
      stageRef.current?.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
    if (!hasZoom) {
      setPosition({ x: 0, y: 0 });
    }
  };

  if (!mounted || !currentSrc) {
    return null;
  }

  const stageCursor = isDragging ? "grabbing" : "grab";

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
        className={`lightbox-panel fixed inset-0 flex flex-col bg-gray-100 transition-transform duration-300 ease-out ${
          visible ? "scale-100" : "scale-[0.99]"
        }`}
      >
        <div className="lightbox-toolbar relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-6">
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

        <div className="relative flex min-h-0 flex-1 items-stretch">
          {hasMultiple && (
            <button
              type="button"
              onClick={goPrev}
              className="lightbox-nav lightbox-nav-side hidden sm:flex"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
          )}

          <div
            ref={stageRef}
            className="lightbox-stage relative min-h-0 flex-1 overflow-hidden touch-none"
            style={{ cursor: stageCursor }}
            onWheel={onWheel}
            onDoubleClick={resetView}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                key={currentSrc}
                src={currentSrc}
                alt={`${label} ${index + 1}`}
                className="lightbox-image max-h-full max-w-full select-none object-contain"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transition: isDragging ? "none" : "transform 0.2s ease-out",
                }}
                draggable={false}
              />
            </div>
          </div>

          {hasMultiple && (
            <button
              type="button"
              onClick={goNext}
              className="lightbox-nav lightbox-nav-side hidden sm:flex"
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          )}
        </div>

        <p className="relative z-20 shrink-0 border-t border-slate-200 px-4 py-2.5 text-center text-[10px] text-gray-500 sm:text-xs">
          Rueda o +/- para zoom · Arrastra para mover (sin zoom vuelve al centro) · Doble clic restablece · ESC cierra
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
          z-index: 20;
        }

        .lightbox-close {
          width: 2.25rem;
          height: 2.25rem;
          font-size: 1rem;
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
