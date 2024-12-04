import React, { forwardRef } from 'react';
import Lottie from 'lottie-react';
// import InfiniteLoader from './assets/InfiniteLoading.json';
import Working from './assets/WorkDesk.json';
import screen from './assets/Working.json';

const AboutSection = (props, refC) => {
  return (
    <div className='' ref={refC}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-28 bg-white text-black h-full">
        <div className="flex flex-col justify-center p-3 text-4xl md:text-7xl font-dancing tracking-wider ">
          Hi, I'm a Computer Science Enthusiast
          <div className="pt-5 text-lg md:text-xl">
            <marquee behavior="" direction="" className='font-mono'>
              MERN Stack Developer / Java Backend Developer / Data Analyst
            </marquee>
          </div>
          <div className="flex justify-center pt-5">
            <Lottie animationData={screen} className="w-3/4 md:w-full" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-left text-wrap font-mono text-xl md:text-xl">
          <div className="flex justify-center items-center w-80 md:w-96">
            <Lottie animationData={Working} />
          </div>
          <br />
          <p className='text-2xl'> <b>"Crafting code with the precision of a master architect, turning coffee into software that powers the future".</b>  With almost 2 Years of Experience in Software Development, I am adept in creating software from scratch to deployment into production.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(AboutSection);
