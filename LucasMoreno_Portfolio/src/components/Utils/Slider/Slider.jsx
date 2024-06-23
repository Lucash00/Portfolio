// Slider.jsx
import React, { useState } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full">
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
        className="absolute left-0 top-0 opacity-50 mx-[10%]"
      />

      {/* Imagen siguiente */}
      <img
        src={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]}
        alt={`Next Image`}
        className="absolute right-0 top-0 opacity-50 mx-[10%]"
      />

      {/* Botones para cambiar de imagen */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
        <button className="w-[5%] h-full bg-black bg-opacity-25" onClick={prevImage}></button>
        <button className="w-[5%] h-full bg-black bg-opacity-25" onClick={nextImage}></button>
      </div>
    </div>
  );
};

export default Slider;
