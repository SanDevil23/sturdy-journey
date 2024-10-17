import React from 'react'

const QRGenerator = () => {
  return (
    <div className='bg-white p-10'>
      <div className='text-center font-extralight text-4xl md:text-8xl leading-snug'>
        Generate QR
      </div>
      <input className='bg-black cursor-text text-green-500 w-full border-none p-1' type="text" />
    </div>
  )
}

export default QRGenerator
