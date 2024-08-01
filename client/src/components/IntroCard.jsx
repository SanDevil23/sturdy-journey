import React from 'react'
// import TopNav from "../components/TopNav";
import Lottie from 'lottie-react';
import Block from './assets/Block.json'
// import { Link } from 'react-router-dom';



const IntroCard = () => {
  return (
    <div>

    <div className="grid grid-cols-2 p-28 h-screen">

        <div className='flex-auto items-center self-center bottom-5'>
          {/* <div className='text-lg'>hi. my name is </div> */}
          <div className="pb-2 text-7xl tracking-wide text-orange-100 font-extrabold">Sankalp Adhya</div>
          <div className="pb-2 text-xl font-semibold text-white">Full Stack Developer and Aspiring Software Engineer</div>
          <div className="pb-2 text-xl font-thin text-white">
          Solving design puzzles, crafting intuitive user interfaces with meaningful interactions, developing robust web applications, and delivering seamless digital experiences.</div>
          {/* button preset           */}
          {/* <div className='flex border-2 border-black bg-orange-900 text-white h-8 w-36 items-center justify-center'>
              ABOUT ME
          </div> */}

          <button className='text-lime-600 text-xl font-semibold '>About Me _</button>

        </div>
        <div className='flex self-center justify-center w-full'>
          <Lottie animationData={Block}/>
        </div>

        {/* <button className="mt-2 p-2 w-20 bg-indigo-900 text-white font-medium border-none border-black rounded-xl tracking-wide">Hire Me</button> */}
      </div>
    </div>
  )
}

export default IntroCard