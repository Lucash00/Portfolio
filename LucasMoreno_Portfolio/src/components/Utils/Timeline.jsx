import React, { useEffect, useRef, useState } from 'react';

export default function Timeline({ experiences, onExperienceSelect }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]); // Array para almacenar referencias a los elementos
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const items = containerRef.current.querySelectorAll('.snap-center');
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = activeIndex;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        // Ignorar el primer índice (el elemento fantasma)
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

    // Ejecutar una vez al montar para inicializar correctamente
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [experiences, onExperienceSelect, activeIndex]);

  const handleItemClick = (experience, index) => {
    onExperienceSelect(experience);
    setActiveIndex(index);
    // Desplazar el elemento al centro de la vista
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full flex overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
    >
      <div className="h-full flex-1">
        {/* Elemento fantasma */}
        <div className="snap-center flex items-center relative max-h-screen h-1/3" />

        {experiences.map((experience, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)} // Asignar referencia al elemento
              className={`snap-center flex items-center relative max-h-screen h-1/3`}
            >
              <div className="relative flex items-center h-screen justify-center left-3/4">
                {/* Barra hacia arriba solo si no es el primer elemento */}
                {index > 0 && (
                  <div className="absolute top-0 w-1 h-full bg-gray-600" />
                )}
                {/* Barra hacia abajo solo si no es el último elemento */}
                {index < experiences.length - 1 && (
                  <div className="absolute bottom-0 w-1 h-full bg-gray-600" />
                )}
                <div
                  className={`z-10 w-4 h-4 rounded-full cursor-pointer ${isActive ? 'bg-yellow-400' : 'bg-gray-500'}`}
                  onClick={() => handleItemClick(experience, index)}
                />
              </div>
              {/* Contenedor para el texto */}
              <div
                className="flex items-center absolute left-1/4"
              >
                {/* Texto */}
                <div
                  className={`max-w-56 overflow-hidden text-ellipsis text-rig ${isActive ? 'text-yellow-400' : 'text-gray-500'}`}
                >
                  {experience.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
