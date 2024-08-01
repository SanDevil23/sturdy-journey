import React from 'react'
import coverPic from './assets/images/cover1.png'

const Weathosopher = () => {
  return (
    <div className=''>

    <div className='grid grid-cols-2 p-20'>
            <div className='text-cyan-50'>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-2xl font-extralight text-slate-400'>FORECASTING APPLICATION</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-6xl font-semibold'>Weathosopher</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-xl font-medium'>Find the Weather Around the World in Seconds</p>

                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-lg font-medium'><b>Built With : </b>ReactJS, Node, ExpressJS, Open Weather API ,Git, TailWind CSS. </p>
                
                <br />
                <button className='flex p-4 w-fit h-1 items-center border-solid border border-white'><a href="https://www.github.com/SanDevil23/Weathosopher">View the Code</a></button>
            </div>

            <div>
                {/* image */}
                <img src={coverPic} alt="" />
            </div>

        </div>
      
      
    </div>
  )
}

export default Weathosopher
