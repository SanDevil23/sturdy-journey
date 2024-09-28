import React from 'react'

const ChatterHub = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-2 p-20'>
            <div className='text-cyan-50'>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-2xl font-extralight text-slate-400'>CHAT APPLICATION</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-6xl font-semibold'>ChatterHub</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-xl font-medium'>Real Time One-to-One Messaging Application</p>
                <p className='mt-4 md:mt-8 lg:mt-12 text-left text-lg font-medium'><b>Built With : </b>ReactJS, Node, ExpressJS, MongoDB (NoSQL Database, Cloud Functions, Cloud Storage),Git, ChakraUI, Cloudinary. </p>
                <br />
                <button className='bg-green-800 rounded-md p-2 hover:bg-lime-600 font-mono'><a href="https://www.github.com/SanDevil23/ChatterHub">View the Code</a></button>
            </div>

            <div>
                {/* image */}
                <img src="https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60b9c51442cedd51532232ea_chat-app.jpg" alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default ChatterHub
