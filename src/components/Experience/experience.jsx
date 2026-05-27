import React, { useCallback, useEffect, useRef, useState } from 'react';
import Timeline from '../Utils/Timeline';
import CardTimeline from '../Utils/Card/CardTimeline';
import { experiences } from '../../data/experiences';

const FLIP_MS = 150;
const WHEEL_STEP_COOLDOWN_MS = 160;
const EXPERIENCE_TITLE = 'Experiencia';

function getTitleLetterSquash(index, total) {
  const center = (total - 1) / 2;
  const distFromCenter = Math.abs(index - center) / (center || 1);
  const bulge = 1.03 + (1 - distFromCenter) * 0.08;

  return {
    bulge: bulge.toFixed(3),
  };
}

function isEditableTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  return !!target.closest(
    'input, textarea, select, [contenteditable="true"], [data-no-timeline-nav]',
  );
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayExperience, setDisplayExperience] = useState(experiences[0]);
  const [flipClass, setFlipClass] = useState('');
  const [titleSquashKey, setTitleSquashKey] = useState(0);
  const timelineRef = useRef(null);
  const activeIndexRef = useRef(0);
  const flipTimeoutRef = useRef(null);
  const wheelCooldownRef = useRef(false);
  const touchStartYRef = useRef(null);

  const clearFlipTimeouts = () => {
    if (flipTimeoutRef.current) {
      clearTimeout(flipTimeoutRef.current);
      flipTimeoutRef.current = null;
    }
  };

  const runCardFlip = useCallback((experience, index) => {
    if (index === activeIndexRef.current) return;

    const direction = index > activeIndexRef.current ? 'down' : 'up';
    activeIndexRef.current = index;
    setActiveIndex(index);

    clearFlipTimeouts();

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      setFlipClass('');
      setDisplayExperience(experience);
      return;
    }

    setTitleSquashKey((key) => key + 1);

    setFlipClass(
      direction === 'down' ? 'animate-cardFlipOutUp' : 'animate-cardFlipOutDown',
    );

    flipTimeoutRef.current = window.setTimeout(() => {
      setDisplayExperience(experience);
      setFlipClass(
        direction === 'down' ? 'animate-cardFlipInUp' : 'animate-cardFlipInDown',
      );

      flipTimeoutRef.current = window.setTimeout(() => {
        setFlipClass('');
        flipTimeoutRef.current = null;
      }, FLIP_MS);
    }, FLIP_MS);
  }, []);

  const navigateToIndex = useCallback((index, options = {}) => {
    const clamped = Math.max(0, Math.min(index, experiences.length - 1));
    if (clamped === activeIndexRef.current) return;

    runCardFlip(experiences[clamped], clamped);

    if (options.source !== 'timeline-scroll') {
      timelineRef.current?.scrollToIndex(clamped, 'smooth');
    }
  }, [runCardFlip]);

  const stepIndex = useCallback(
    (delta) => {
      navigateToIndex(activeIndexRef.current + delta);
    },
    [navigateToIndex],
  );

  useEffect(() => () => clearFlipTimeouts(), []);

  useEffect(() => {
    const root = document.getElementById('experience-page-root');
    if (!root) return undefined;

    const onWheel = (event) => {
      if (isEditableTarget(event.target)) return;
      if (Math.abs(event.deltaY) < 4) return;

      event.preventDefault();

      if (wheelCooldownRef.current) return;
      wheelCooldownRef.current = true;
      window.setTimeout(() => {
        wheelCooldownRef.current = false;
      }, WHEEL_STEP_COOLDOWN_MS);

      stepIndex(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event) => {
      if (isEditableTarget(event.target)) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        stepIndex(1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        stepIndex(-1);
      }
    };

    const onTouchStart = (event) => {
      if (isEditableTarget(event.target)) return;
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event) => {
      if (touchStartYRef.current == null) return;

      const endY = event.changedTouches[0]?.clientY;
      if (endY == null) return;

      const deltaY = touchStartYRef.current - endY;
      touchStartYRef.current = null;

      if (Math.abs(deltaY) < 48) return;

      stepIndex(deltaY > 0 ? 1 : -1);
    };

    root.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    root.addEventListener('touchstart', onTouchStart, { passive: true });
    root.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      root.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      root.removeEventListener('touchstart', onTouchStart);
      root.removeEventListener('touchend', onTouchEnd);
    };
  }, [stepIndex]);

  return (
    <div
      id="experience-page-root"
      className="h-full max-h-full overflow-x-clip overflow-y-hidden grid grid-cols-3"
    >
      <div className="col-span-1 max-h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
        <Timeline
          ref={timelineRef}
          experiences={experiences}
          activeIndex={activeIndex}
          onActiveIndexChange={navigateToIndex}
        />
      </div>

      <div className="relative col-span-2 col-start-2 h-full max-h-screen min-h-0 overflow-visible px-2 md:px-3 lg:px-4 xl:px-8 2xl:px-16 [--experience-menu-h:3.25rem] md:[--experience-menu-h:3.5rem]">
        <h1 className="pointer-events-none absolute left-1/2 z-20 w-fit max-w-full -translate-x-1/2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem] top-[calc(4*var(--experience-menu-h))] sm:top-[calc(2.5rem+4*var(--experience-menu-h))]">
          <span
            key={titleSquashKey}
            data-text-glow
            className="text-mouse-glow inline-flex items-center justify-center"
          >
            {EXPERIENCE_TITLE.split('').map((char, index) => {
              const squash = getTitleLetterSquash(
                index,
                EXPERIENCE_TITLE.length,
              );

              return (
                <span
                  key={`${char}-${index}`}
                  className={
                    titleSquashKey > 0
                      ? 'inline-block origin-center animate-experienceLetterSquash will-change-transform'
                      : 'inline-block'
                  }
                  style={
                    titleSquashKey > 0
                      ? { ['--bulge']: squash.bulge }
                      : undefined
                  }
                >
                  {char}
                </span>
              );
            })}
          </span>
        </h1>
        <p className="pointer-events-none absolute left-1/2 z-20 w-[min(92%,52rem)] -translate-x-1/2 text-center text-sm md:text-base font-medium tracking-tight text-slate-300 top-[calc(4*var(--experience-menu-h)+4.1rem)] sm:top-[calc(2.5rem+4*var(--experience-menu-h)+5rem)]">
          Mis experiencias laborales, aprendizaje autodidacta y formación en el sector tecnológico.
        </p>
        <div className="experience-card-stage absolute inset-0 flex items-center justify-center overflow-visible px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16">
          <div className="flex h-full w-full min-w-0 max-w-full items-center justify-center overflow-visible">
            <div className="w-full min-w-0 max-w-full overflow-visible [perspective:1400px] [perspective-origin:center_center]">
              <div
                className={`w-full min-w-0 max-w-full origin-center [transform-style:preserve-3d] [backface-visibility:hidden] ${flipClass}`}
              >
                <CardTimeline experience={displayExperience} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
