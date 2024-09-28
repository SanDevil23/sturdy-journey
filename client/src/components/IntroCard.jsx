import React from 'react';
import Lottie from 'lottie-react';
import Block from './assets/Block.json';

const IntroCard = () => {
  return (
    <div className="h-screen p-6 pt-10  md:p-28">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6">
        <div className="flex flex-col justify-center items-start">
          <div className="pb-2 text-4xl md:text-7xl tracking-wide text-orange-100 font-extrabold">Sankalp Adhya</div>
          <div className="pb-2 text-lg font-mono md:text-xl font-semibold text-white">Full Stack Developer and Aspiring Software Engineer</div>
          <div className="pb-2 text-base md:text-xl font-thin text-slate-400">
            Solving design puzzles, crafting intuitive user interfaces with meaningful interactions, developing robust web applications, and delivering seamless digital experiences.
          </div>
          <button className="text-lime-600 text-lg md:text-xl font-semibold mt-4">About Me _</button>
        </div>
        <div className="flex justify-center items-center">
          <Lottie animationData={Block} className="w-3/4 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
