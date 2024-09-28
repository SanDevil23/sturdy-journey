import React, { useRef } from 'react'
import logo from './assets/logo.json'
import Lottie from 'lottie-react'

const TopNav = ({scrollToSection}) => {
  
  return (
    <div>
      <div className="inline-flex backdrop-blur-lg p-3 bg-black justify-between items-center fixed w-full top-0 shadow-md z-50 opacity-90">
        <div className='flex w-56 items-center '>
          <Lottie animationData={logo}/>    
          <a className="text-4xl text-white" href="/">portfolio.</a>
        </div>  
        <div className="float-right text-2xl font-mono text-white mr-2 ">
          <button className='bg-orange-800 rounded-md p-2 hover:bg-black mr-1' onClick={() => scrollToSection('section1')}>about </button>
          <button className='bg-red-800 rounded-md p-2 hover:bg-black mr-1' onClick={() => scrollToSection('section2')}>blogs </button>
          <button className='bg-yellow-500 rounded-md p-2 hover:bg-black mr-1' onClick={() => scrollToSection('section3')}>projects </button>
        </div>  
      </div>      
    </div>
  )
}

export default TopNav
