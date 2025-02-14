import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='flex flex-col items-center text-white shadow-lg shadow-gray-400 h-max  bg-gradient-to-br from-sky-800 to-purple-500 rounded-xl hover:translate-y-1'>
      

      <div className='p-4'>
      <h1 className='text-2xl text-center font-extrabold'>
        {props.title}
      </h1>


      <div className='text-md text-left p-2'>
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
        {props.desc}
      </div>

      <div className='text-md text-left p-2'>
        <b>Technology : </b>{props.tech}
      </div>

      </div>
      <button className='flex items-center justify-center shadow-md hover:bg-sky-900 hover:text-white bg-sky-600 p-2 text-sm w-full h-full rounded-sm text-white font-semibold'>Get Code</button>
      
    </div>
  )
}

export default ProjectCard
