import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

function scrollItemToCenter(container, item, behavior = 'smooth') {
  const containerRect = container.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();
  const offset =
    itemRect.left -
    containerRect.left -
    (container.clientWidth - itemRect.width) / 2;
  const targetLeft = container.scrollLeft + offset;

  container.scrollTo({
    left: Math.max(0, targetLeft),
    behavior,
  });
}

function getClosestExperienceIndex(container, scrollDirection = 0) {
  const items = container.querySelectorAll('.timeline-horizontal__item');
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  let closestIndex = 0;
  let minDistance = Infinity;

  items.forEach((item, index) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    let distance = Math.abs(itemCenter - containerCenter);

    if (scrollDirection > 0 && itemCenter > containerCenter) {
      distance *= 0.55;
    } else if (scrollDirection < 0 && itemCenter < containerCenter) {
      distance *= 0.55;
    }

    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

const TimelineHorizontal = forwardRef(function TimelineHorizontal(
  { experiences, activeIndex, onActiveIndexChange },
  ref,
) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const isProgrammaticScrollRef = useRef(false);
  const lastScrollLeftRef = useRef(0);
  const lastReportedIndexRef = useRef(activeIndex);

  useImperativeHandle(ref, () => ({
    scrollToIndex(index, behavior = 'smooth') {
      const container = containerRef.current;
      const item = itemRefs.current[index];
      if (!container || !item) return;

      isProgrammaticScrollRef.current = true;
      scrollItemToCenter(container, item, behavior);
      window.setTimeout(
        () => {
          isProgrammaticScrollRef.current = false;
        },
        behavior === 'smooth' ? 450 : 50,
      );
    },
  }));

  useEffect(() => {
    lastReportedIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      const scrollDirection =
        container.scrollLeft > lastScrollLeftRef.current ? 1 : -1;
      lastScrollLeftRef.current = container.scrollLeft;

      const closestIndex = getClosestExperienceIndex(container, scrollDirection);

      if (closestIndex !== lastReportedIndexRef.current) {
        lastReportedIndexRef.current = closestIndex;
        onActiveIndexChange(closestIndex, { source: 'timeline-scroll' });
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => container.removeEventListener('scroll', handleScroll);
  }, [onActiveIndexChange]);

  const handleItemClick = (index) => {
    lastReportedIndexRef.current = index;
    onActiveIndexChange(index, { source: 'timeline-click' });
  };

  return (
    <div
      ref={containerRef}
      className="timeline-horizontal relative h-full w-full select-none overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
    >
      <div className="timeline-horizontal__track relative flex h-full min-w-max flex-row">
        <div className="timeline-horizontal__line" aria-hidden="true" />

        <div className="timeline-horizontal__spacer snap-center h-full w-[33.333vw] shrink-0" />

        {experiences.map((experience, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={experience.id ?? index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="timeline-horizontal__item snap-center relative flex h-full w-[33.333vw] shrink-0 flex-col"
            >
              <div className="timeline-horizontal__marker">
                <button
                  type="button"
                  aria-label={experience.endDate}
                  aria-current={isActive ? 'true' : undefined}
                  className={`timeline-horizontal__dot h-4 w-4 shrink-0 cursor-pointer rounded-full border-0 p-0 transition-transform duration-150 ${
                    isActive
                      ? 'scale-125 bg-yellow-400 shadow-lg shadow-gray-900'
                      : 'scale-90 bg-gray-500'
                  }`}
                  onClick={() => handleItemClick(index)}
                />
              </div>

              <button
                type="button"
                className="timeline-horizontal__date max-w-[90%] cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-center text-xs font-medium"
                onClick={() => handleItemClick(index)}
              >
                <span
                  className={`pointer-events-none inline-block transition-transform duration-150 ${
                    isActive
                      ? 'scale-110 text-yellow-400'
                      : 'scale-95 text-gray-500'
                  }`}
                >
                  {experience.endDate}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default TimelineHorizontal;
