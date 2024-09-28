import React, { forwardRef } from 'react'
import Lottie from 'lottie-react'
// import InfiniteLoader from './assets/InfiniteLoading.json'
import Working from './assets/WorkDesk.json'
import screen from './assets/Working.json'

const AboutSection = (props, refC) => {
  return (
    <div ref={refC}>
    <div className="grid grid-cols-2 p-28 bg-zinc-950 text-white h-full">
        <div className=' justify-center p-3 text-7xl font-semibold items-center'>
          Hi, I'm a Computer Science Enthusiast
          <div className='pt-5 text-xl font-thin'>MERN Stack Developer / Java Backend Developer / Data Analyst</div>

          <div className=''>
            <Lottie animationData={screen}/>
          </div>
        </div>


        <div className='  text-wrap font-mono text-xl'>
          <div className='flex justify-center items-center  w-96 '>
            <Lottie animationData={Working}/>
          </div>
          <br />
          <p>Problem Solving, Data Structures & Algorithms, are my core skills.</p>
          <br />
          <p>With a strong base in backend development and working with various frontend as well as backend frameworks I have acquired experience in building scalable applications</p>



        </div>
      </div>
      
    </div>
  )
}

export default React.forwardRef(AboutSection);
