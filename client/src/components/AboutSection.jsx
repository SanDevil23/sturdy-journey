import React, { forwardRef } from 'react';
import Lottie from 'lottie-react';
// import InfiniteLoader from './assets/InfiniteLoading.json';
import Working from './assets/WorkDesk.json';
import screen from './assets/Working.json';

const AboutSection = (props, refC) => {
  return (
    <div className='' ref={refC}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-28 bg-zinc-950 text-white h-full">
        <div className="flex flex-col justify-center p-3 text-4xl md:text-7xl font-semibold">
          Hi, I'm a Computer Science Enthusiast
          <div className="pt-5 text-lg md:text-xl font-thin">
            MERN Stack Developer / Java Backend Developer / Data Analyst
          </div>
          <div className="flex justify-center pt-5">
            <Lottie animationData={screen} className="w-3/4 md:w-full" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-wrap font-mono text-lg md:text-xl">
          <div className="flex justify-center items-center w-80 md:w-96">
            <Lottie animationData={Working} />
          </div>
          <br />
          <p>Problem Solving, Data Structures & Algorithms are my core skills.</p>
          <br />
          <p>
            With a strong base in backend development and experience in various frontend and backend frameworks, I have acquired skills in building scalable applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(AboutSection);
