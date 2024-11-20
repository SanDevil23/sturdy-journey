import React, { useState } from 'react';

const SlideShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  return (
    <div className="relative">
      <div className="h-screen">
        {slides[currentSlide]}
        <div className='absolute bottom-1/4 inset-x-0 flex justify-between z-50 p-1'>
          <button className="text-4xl font-extrabold transition duration-150 ease-out hover:ease-in0 active:text-red-500 hover:text-teal-600" onClick={prevSlide}>&#10094;</button>
          <button className="text-4xl font-extrabold active:text-purple-500 hover:text-teal-600" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
