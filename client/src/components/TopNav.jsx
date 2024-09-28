import React from 'react';
import logo from './assets/logo.json';
import Lottie from 'lottie-react';

const TopNav = ({ scrollToSection }) => {
  return (
    <div>
      <div className="backdrop-blur-lg p-3 bg-black fixed w-full top-0 shadow-md z-50 opacity-90 flex justify-between items-center">
        <div className='flex w-56 items-center'>
          <Lottie animationData={logo} className="w-16 md:w-24" /> {/* Adjust size based on screen */}
          <a className="text-2xl md:text-4xl text-white ml-2" href="/">portfolio.</a>
        </div>
        <div className="hidden md:flex space-x-2 text-2xl font-mono text-white mr-2"> {/* Hide on small screens */}
          <button className='bg-orange-800 rounded-md p-2 hover:bg-black' onClick={() => scrollToSection('section1')}>about</button>
          <button className='bg-red-800 rounded-md p-2 hover:bg-black' onClick={() => scrollToSection('section2')}>blogs</button>
          <button className='bg-yellow-500 rounded-md p-2 hover:bg-black' onClick={() => scrollToSection('section3')}>projects</button>
        </div>
        <div className="md:hidden"> {/* Show on small screens */}
          <button className="text-white" onClick={() => { /* Logic for mobile menu */ }}>
            ☰ {/* Icon for mobile menu */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
