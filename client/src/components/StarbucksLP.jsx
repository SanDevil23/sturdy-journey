import React from 'react'
import coverPic from './assets/images/cover2.png'

const StarbucksLP = () => {
  return (
    <div className=''>

    <div className='grid grid-cols-2 p-20'>
            <div className='text-cyan-50'>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-2xl font-extralight text-slate-400'>LANDING PAGE</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-6xl font-semibold'>Starbucks Landing Page</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-xl font-medium'></p>

                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-lg font-medium'><b>Built With : </b>HTML, CSS, JavaScript </p>
                
                <br />
                <button className='flex p-4 w-fit h-1 items-center border-solid border border-white '><a href="https://sandevil23.github.io/starbucks_landingpage/">View Webpage</a></button>
                <button className='flex p-4 w-fit h-1 items-center border-solid border mt-2 border-white text-white hover:bg-cyan-800'><a href="https://github.com/SanDevil23/starbucks_landingpage">View the Code</a></button>
            
            </div>

            <div>
                {/* image */}
                <img src={coverPic} alt="" />
            </div>

        </div>
      
      
    </div>
  )
}

export default StarbucksLP
