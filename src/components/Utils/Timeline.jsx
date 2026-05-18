import React, { useEffect, useRef, useState } from 'react';

export default function Timeline({ experiences, onExperienceSelect }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]); // Array para almacenar referencias a los elementos
  const [activeIndex, setActiveIndex] = useState(0);
  const isClickScrollingRef = useRef(false); // ← FLAG para ignorar scroll temporalmente

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isClickScrollingRef.current) return;

      const items = containerRef.current.querySelectorAll('.snap-center');
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = activeIndex;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        if (index === 0) return;

        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index - 1;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
        onExperienceSelect(experiences[closestIndex]);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    handleScroll(); // Inicialización

    return () => container.removeEventListener('scroll', handleScroll);
  }, [experiences, onExperienceSelect, activeIndex]);

  const handleItemClick = (experience, index) => {
    isClickScrollingRef.current = true;
    setActiveIndex(index);
    onExperienceSelect(experience);

    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    // ← Espera a que termine el scroll antes de permitir handleScroll otra vez
    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 500);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full flex overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
    >
      <div className="h-full flex-1">
        <div className="snap-center flex items-center relative max-h-screen h-1/3" />

        {experiences.map((experience, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
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
                  className={`z-10 w-4 h-4 rounded-full cursor-pointer transform duration-150 ${
                    isActive
                      ? 'bg-yellow-400 sm:scale-110 md:scale-150 shadow-lg shadow-gray-900'
                      : 'bg-gray-500 sm:scale-75 md:scale-90 2xl:scale-95'
                  }`}
                  onClick={() => handleItemClick(experience, index)}
                />
              </div>

              <div className="sm:mr-9 text-center w-3/4">
                <div
                  className="sm:max-w-20 md:max-w-40 lg:max-w-96 xl:max-w-72 2xl:max-w-full sm:text-xs md:text-lg xl:text-xl 2xl:text-2xl overflow-hidden"
                  onClick={() => handleItemClick(experience, index)}
                >
                  <p
                    className={`transform duration-150 cursor-pointer ${
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
}
