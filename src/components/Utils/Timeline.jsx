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
    itemRect.top -
    containerRect.top -
    (container.clientHeight - itemRect.height) / 2;
  const targetTop = container.scrollTop + offset;

  container.scrollTo({
    top: Math.max(0, targetTop),
    behavior,
  });
}

function getClosestExperienceIndex(container, scrollDirection = 0) {
  const items = container.querySelectorAll('.snap-center');
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.top + containerRect.height / 2;

  let closestIndex = 0;
  let minDistance = Infinity;

  items.forEach((item, index) => {
    if (index === 0) return;

    const experienceIndex = index - 1;
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;
    let distance = Math.abs(itemCenter - containerCenter);

    if (scrollDirection > 0 && itemCenter > containerCenter) {
      distance *= 0.55;
    } else if (scrollDirection < 0 && itemCenter < containerCenter) {
      distance *= 0.55;
    }

    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = experienceIndex;
    }
  });

  return closestIndex;
}

const Timeline = forwardRef(function Timeline(
  { experiences, activeIndex, onActiveIndexChange },
  ref,
) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const isProgrammaticScrollRef = useRef(false);
  const lastScrollTopRef = useRef(0);
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
        container.scrollTop > lastScrollTopRef.current ? 1 : -1;
      lastScrollTopRef.current = container.scrollTop;

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
      className="relative h-full flex select-none overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
    >
      <div className="h-full flex-1">
        <div className="snap-center flex items-center relative max-h-screen h-1/3" />

        {experiences.map((experience, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={experience.id ?? index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="snap-center flex items-center relative max-h-screen h-1/3"
            >
              <div className="relative flex items-center h-screen justify-center sm:left-24 md:left-3/4">
                {index > 0 && (
                  <div className="absolute top-0 w-1 h-full sm:scale-x-50 md:scale-x-90 xl:scale-x-95 bg-gray-600" />
                )}
                {index < experiences.length - 1 && (
                  <div className="absolute bottom-0 w-1 sm:scale-x-50 md:scale-x-90 xl:scale-x-95 h-full bg-gray-600" />
                )}
                <div
                  className={`z-10 w-4 h-4 shrink-0 rounded-full cursor-pointer transform duration-150 ${
                    isActive
                      ? 'bg-yellow-400 sm:scale-110 md:scale-150 shadow-lg shadow-gray-900'
                      : 'bg-gray-500 sm:scale-75 md:scale-90 2xl:scale-95'
                  }`}
                  onClick={() => handleItemClick(index)}
                />
              </div>

              <div className="sm:mr-9 text-center w-3/4">
                <div
                  className="sm:max-w-20 md:max-w-40 lg:max-w-96 xl:max-w-72 2xl:max-w-full cursor-pointer overflow-hidden sm:text-xs md:text-lg xl:text-xl 2xl:text-2xl"
                  onClick={() => handleItemClick(index)}
                >
                  <p
                    className={`pointer-events-none transform duration-150 ${
                      isActive
                        ? 'text-yellow-400 sm:scale-125 md:scale-150'
                        : 'text-gray-500 sm:scale-95 md:scale-95 2xl:scale-75'
                    }`}
                  >
                    {experience.endDate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Timeline;
