import React, { useState } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredDot, setHoveredDot] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleClickDot = (index) => {
    setCurrentIndex(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'prev') {
      prevImage();
    } else if (direction === 'next') {
      nextImage();
    }
  };

  return (
    <div className="relative w-full">
      {/* Contenedor de las imágenes */}
      <div className="relative w-full bg-gray-50">
        {/* Imagen actual */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="object-contain mx-auto"
        />

        {/* Imagen anterior */}
        <img
          src={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]}
          alt={`Previous Image`}
          className="absolute left-0 top-0 opacity-40 mx-[10%]"
        />

        {/* Imagen siguiente */}
        <img
          src={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]}
          alt={`Next Image`}
          className="absolute right-0 top-0 opacity-40 mx-[10%]"
        />

        {/* Botones para cambiar de imagen */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button
            className="w-[5%] h-full bg-gray-300 focus:outline-none flex items-center justify-center hover:bg-gray-400 transition duration-300 transform relative active:scale-x-125"
            onClick={() => handleArrowClick('prev')}
          >
            <span className="text-white text-2xl">{'<'}</span>
            <span className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-transparent transition-all duration-300 transform scale-0 "></span>
          </button>
          <button
            className="w-[5%] h-full bg-gray-300 focus:outline-none flex items-center justify-center hover:bg-gray-400 transition duration-300 transform relative active:scale-x-125"
            onClick={() => handleArrowClick('next')}
          >
            <span className="text-white text-2xl">{'>'}</span>
            <span className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-transparent transition-all duration-300 transform scale-0 "></span>
          </button>
        </div>
      </div>

      {/* Marcadores (dots) fuera del contenedor principal */}
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => handleClickDot(index)}
              onMouseEnter={() => setHoveredDot(index)}
              onMouseLeave={() => setHoveredDot(null)}
              className={`rounded-full mx-1 focus:outline-none transition-all duration-300 ${
                index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'
              }`}
              style={{
                width: index === currentIndex ? '12px' : '10px',
                height: index === currentIndex ? '12px' : '10px',
                transform: hoveredDot === index ? 'scale(1.5)' : 'scale(1)',
              }}
            />
            {hoveredDot === index && (
              <div className="absolute bottom-full mb-2 w-24 h-24 transform -translate-x-1/2 left-1/2">
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
