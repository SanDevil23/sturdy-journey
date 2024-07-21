import React from 'react'

const TopNav = () => {
  return (
    <div>
      <div className="backdrop-blur-lg p-3 bg-black text-white fixed w-full top-0 shadow-md z-50 opacity-90">
        <a className="text-4xl text-white" href="/">portfolio.</a>
        <div className="float-right text-xl text-white">
          <a href="/">about </a>
          <a href="/">blogs </a>
          <a href="/">projects </a>
        </div>
      </div>      
    </div>
  )
}

export default TopNav
