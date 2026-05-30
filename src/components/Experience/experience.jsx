import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Timeline from '../Utils/Timeline';
import TimelineHorizontal from '../Utils/TimelineHorizontal';
import CardTimeline from '../Utils/Card/CardTimeline';
import { getExperiences } from '../../data/getLocalized';
import { useTranslation } from '../../i18n/client';
import { useExperiencePortraitLayout } from './useExperiencePortraitLayout';
import './experience.css';

const FLIP_MS = 150;
const WHEEL_STEP_COOLDOWN_MS = 160;

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

function ExperienceTitleContent({ title, titleSquashKey }) {
  return (
    <span
      key={titleSquashKey}
      data-text-glow
      className="text-mouse-glow inline-flex items-center justify-center"
    >
      {title.split('').map((char, index) => {
        const squash = getTitleLetterSquash(index, title.length);

        return (
          <span
            key={`${char}-${index}`}
            className={
              titleSquashKey > 0
                ? 'inline-block origin-center animate-experienceLetterSquash will-change-transform'
                : 'inline-block'
            }
            style={
              titleSquashKey > 0 ? { ['--bulge']: squash.bulge } : undefined
            }
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default function Experience() {
  const { locale, t } = useTranslation();
  const experiences = useMemo(() => getExperiences(locale), [locale]);
  const experienceTitle = t('pages.experience.title');
  const isPortraitLayout = useExperiencePortraitLayout();
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayExperience, setDisplayExperience] = useState(() => experiences[0]);
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

    const goingRight = index > activeIndexRef.current;
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

    const [flipOut, flipIn] = isPortraitLayout
      ? goingRight
        ? ['animate-cardFlipOutRight', 'animate-cardFlipInRight']
        : ['animate-cardFlipOutLeft', 'animate-cardFlipInLeft']
      : goingRight
        ? ['animate-cardFlipOutUp', 'animate-cardFlipInUp']
        : ['animate-cardFlipOutDown', 'animate-cardFlipInDown'];

    setFlipClass(flipOut);

    flipTimeoutRef.current = window.setTimeout(() => {
      setDisplayExperience(experience);
      setFlipClass(flipIn);

      flipTimeoutRef.current = window.setTimeout(() => {
        setFlipClass('');
        flipTimeoutRef.current = null;
      }, FLIP_MS);
    }, FLIP_MS);
  }, [isPortraitLayout]);

  const navigateToIndex = useCallback((index, options = {}) => {
    const clamped = Math.max(0, Math.min(index, experiences.length - 1));
    if (clamped === activeIndexRef.current) return;

    runCardFlip(experiences[clamped], clamped);

    if (options.source !== 'timeline-scroll') {
      timelineRef.current?.scrollToIndex(clamped, 'smooth');
    }
  }, [experiences, runCardFlip]);

  const stepIndex = useCallback(
    (delta) => {
      navigateToIndex(activeIndexRef.current + delta);
    },
    [navigateToIndex],
  );

  useEffect(() => () => clearFlipTimeouts(), []);

  useEffect(() => {
    if (!experiences.length) return;
    activeIndexRef.current = 0;
    setActiveIndex(0);
    setDisplayExperience(experiences[0]);
    setFlipClass('');
    timelineRef.current?.scrollToIndex(0, 'auto');
  }, [locale, experiences, isPortraitLayout]);

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

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        stepIndex(1);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
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

  const timelineProps = {
    experiences,
    activeIndex,
    onActiveIndexChange: navigateToIndex,
  };

  const cardStage = (
    <div
      className={`experience-page__card-inner w-full min-w-0 max-w-full origin-center [transform-style:preserve-3d] [backface-visibility:hidden] ${flipClass}`}
    >
      <CardTimeline
        experience={displayExperience}
        variant={isPortraitLayout ? 'stacked' : 'default'}
      />
    </div>
  );

  if (isPortraitLayout) {
    return (
      <div
        id="experience-page-root"
        className="experience-page experience-page--portrait h-full max-h-full overflow-hidden"
      >
        <div className="experience-page__menu-spacer" aria-hidden="true" />

        <section className="experience-page__intro">
          <h1 className="experience-page__title text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <ExperienceTitleContent title={experienceTitle} titleSquashKey={titleSquashKey} />
          </h1>
          <p
            data-text-glow
            className="experience-page__subtitle text-mouse-glow mt-2 w-full max-w-2xl text-pretty text-center text-sm font-medium tracking-tight text-slate-300 md:text-base"
          >
            {t('pages.experience.subtitle')}
          </p>
        </section>

        <section className="experience-page__timeline" aria-label={experienceTitle}>
          <TimelineHorizontal ref={timelineRef} {...timelineProps} />
        </section>

        <section className="experience-page__card">
          <div className="experience-page__card-stage w-full min-w-0 [perspective:1400px] [perspective-origin:center_center]">
            {cardStage}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      id="experience-page-root"
      className="experience-page experience-page--landscape h-full max-h-full grid grid-cols-3 overflow-x-clip overflow-y-hidden"
    >
      <div className="col-span-1 h-full max-h-screen min-h-0">
        <Timeline ref={timelineRef} {...timelineProps} />
      </div>

      <div className="relative col-span-2 col-start-2 h-full max-h-screen min-h-0 overflow-visible px-2 md:px-3 lg:px-4 xl:px-8 2xl:px-16 [--experience-menu-h:3.25rem] md:[--experience-menu-h:3.5rem]">
        <h1 className="experience-page__landscape-title pointer-events-none absolute left-1/2 z-20 w-fit max-w-full -translate-x-1/2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem] top-[calc(4*var(--experience-menu-h))] sm:top-[calc(2.5rem+4*var(--experience-menu-h))]">
          <ExperienceTitleContent title={experienceTitle} titleSquashKey={titleSquashKey} />
        </h1>
        <p
          data-text-glow
          className="experience-page__landscape-subtitle pointer-events-none absolute left-1/2 z-20 w-[min(92%,52rem)] -translate-x-1/2 text-center text-sm font-medium tracking-tight text-slate-300 text-mouse-glow top-[calc(4*var(--experience-menu-h)+4.1rem)] sm:top-[calc(2.5rem+4*var(--experience-menu-h)+5rem)] md:text-base experience-page__subtitle"
        >
          {t('pages.experience.subtitle')}
        </p>
        <div className="experience-card-stage absolute inset-0 flex items-center justify-center overflow-visible px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16">
          <div className="flex h-full w-full min-w-0 max-w-full items-center justify-center overflow-visible">
            <div className="w-full min-w-0 max-w-full overflow-visible [perspective:1400px] [perspective-origin:center_center]">
              {cardStage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
