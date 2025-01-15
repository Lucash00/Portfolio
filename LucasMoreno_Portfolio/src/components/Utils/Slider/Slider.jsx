import React, { useState } from "react";
import { useSprings, animated, config } from "@react-spring/web";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredDot, setHoveredDot] = useState(null); // Control para hover

  const slides = images.map((image, index) => ({
    key: index,
    content: image,
  }));

  const [springs, setSprings] = useSprings(slides.length, (i) => ({
    x: i === currentIndex ? 0 : i > currentIndex ? 100 : -100,
    scale: i === currentIndex ? 1 : 0.8,
    opacity: i === currentIndex ? 1 : 0.5,
    config: config.slow,
  }));

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  setSprings((i) => ({
    x: i === currentIndex ? 0 : i > currentIndex ? 80 : -80,
    scale: i === currentIndex ? 1 : 0.2,
    opacity: i === currentIndex ? 1 : 0,
  }));

  return (
    <div className="relative w-full">
      {/* Carrusel */}
      <div className="relative w-auto h-100 overflow-hidden flex justify-center items-center bg-transparent">
        {springs.map((style, i) => (
          <animated.img
            key={slides[i].key}
            src={slides[i].content}
            alt={`Image ${i}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "10px",
              transform: style.x.to((x) => `translate3d(${x}%, 0, 0)`),
              scale: style.scale,
              opacity: style.opacity,
            }}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
        <button
          className="sm:w-7 sm:h-7 md:w-10 md:h-10 sm:mx-1 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10 bg-gray-300 rounded-full flex items-center justify-center sm:active:bg-gray-400 md:hover:bg-gray-400 sm:active:scale-125 md:hover:scale-110 transition sm:duration-0 md:duration-100"
          onClick={prevImage}
        >
          {"<"}
        </button>
        <button
          className="sm:w-7 sm:h-7 md:w-10 md:h-10 sm:mx-1 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10 bg-gray-300 rounded-full flex items-center justify-center sm:active:bg-gray-400 md:hover:bg-gray-400 sm:active:scale-125 md:hover:scale-110 transition sm:duration-0 md:duration-100"
          onClick={nextImage}
        >
          {">"}
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => handleDotClick(index)}
              onMouseEnter={() => setHoveredDot(index)}
              onMouseLeave={() => setHoveredDot(null)}
              className={`rounded-full mx-1 focus:outline-none transition-all duration-75 ${
                index === currentIndex ? "bg-gray-500" : "bg-gray-300"
              }`}
              style={{
                width: index === currentIndex ? "12px" : "10px",
                height: index === currentIndex ? "12px" : "10px",
                transform: hoveredDot === index ? "scale(1.5)" : "scale(1)",
              }}
            />
            {hoveredDot === index && (
              <div className="absolute bottom-full align-bottom mb-2 w-40 h-40 transform -translate-x-1/2 left-1/2">
                <img
                  src={slide.content}
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
