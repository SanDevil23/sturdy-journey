import React from 'react';
import Lottie from 'lottie-react';
import Block from './assets/Block.json';
import insta from './assets/images/instagram.png'
import twitter from './assets/images/social-media.png'
import linkedin from './assets/images/linkedin.png'
import git from './assets/images/github.png'


const IntroCard = () => {
  return (
    <div className="h-screen p-6 pt-10 bg-gray-50 md:p-28">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6">
        <div className="flex flex-col justify-center items-start">
          <div className="pb-2 text-4xl md:text-7xl tracking-wide text-orange-600 font-extrabold">Sankalp Adhya</div>
          <div className="pb-2 text-lg font-mono md:text-xl font-semibold text-orange-800">Full Stack Developer and Aspiring Software Engineer</div>
          <div className="pb-2 text-base md:text-xl font-normal text-slate-700">
            Solving design puzzles, crafting intuitive user interfaces with meaningful interactions, developing robust web applications, and delivering seamless digital experiences.
          </div>
          {/* <button className="text-lime-600 text-lg md:text-xl font-semibold mt-4">About Me _</button> */}
          <div className='text-black font-semibold font-mono mt-2'>
            <div className='bg-sky-500 p-2 border-none rounded-sm text-center shadow-md shadow-cyan-950 hover:text-white hover:bg-indigo-600'>How To Find Me! </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 items-center justify-center'>
              <a href="https://x.com/wasted_Coder" target='_blank' rel='noreferrer'><img width={50} src={twitter} alt="twitter"/></a>
              <a href="https://www.instagram.com/sankalp.23/" target='_blank' rel='noreferrer'><img width={50} src={insta} alt="insta"/></a>
              <a href="https://github.com/SanDevil23" target='_blank' rel='noreferrer'><img width={50} src={git} alt="github"/></a>
              <a href="https://www.linkedin.com/in/sankalp-adhya-67914621b/" rel='noreferrer' target='_blank'><img width={50} src={linkedin} alt="linkedIN"/></a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Lottie animationData={Block} className="w-3/4 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
