import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Automatic slide every 3 seconds
//     const intervalId = setInterval(() => {
//       slideToNext();
//     }, 1000);

//     // Clean up the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [images.length]);

  const slideToNext = () => {
    if (currentIndex === 10){
        setCurrentIndex(0);
    }else{
        setCurrentIndex((prevIndex) => (prevIndex + 5) % images.length);
    }
  };

  const slideToPrev = () => {
    if (currentIndex === 0){
        setCurrentIndex(10);
    }else{
        setCurrentIndex(
            (prevIndex) => (prevIndex - 5 + images.length) % images.length
        );
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Image container with 5 images visible at a time */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / 5}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/5 flex-shrink-0">
            <img
              src={image}
              alt={`slide-${index}`}
              className="flex item-center justify-center w-full h-full p-2  object-contain"
            />
          </div>
        ))}
      </div>

      {/* Next and Previous Buttons */}
      <button
        onClick={slideToPrev}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-black text-7xl p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
      >
        &#10094;
      </button>
      <button
        onClick={slideToNext}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 text-black p-2 text-7xl rounded-full opacity-70 hover:opacity-100 transition-opacity"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
