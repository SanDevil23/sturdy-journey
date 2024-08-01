import React from 'react'
import logo from './assets/logo.json'
import Lottie from 'lottie-react'

const TopNav = () => {
  return (
    <div>
      <div className="inline-flex backdrop-blur-lg p-3 bg-black justify-between items-center fixed w-full top-0 shadow-md z-50 opacity-90">
        <div className='flex w-56 items-center '>
          <Lottie animationData={logo}/>    
          <a className="text-4xl text-white" href="/">portfolio.</a>
        </div>  
        <div className="float-right text-3xl text-white ">
          <a href="/">about </a>
          <a href="/">blogs </a>
          <a href="/">projects </a>
        </div>
      </div>      
    </div>
  )
}

export default TopNav
