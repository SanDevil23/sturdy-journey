import React from 'react'
import ProjectPage from './ProjectPage'
import SlideShow from './SlideShow'
import ChatterHub from './ChatterHub'
import Weathosopher from './Weathosopher'

const ProjectSection = () => {
    const slides = [
        <div className='h-screen' key={1}><ProjectPage/></div>,
        <div className='h-screen' key={2}><ChatterHub/></div>,
        <div className='h-screen' key={3}><Weathosopher/></div>,
    ]
    return (
    <div>
        <div className="flex items-center justify-center text-white p-5">
            {/* <h1>React SlideShow Example</h1> */}
            <SlideShow slides={slides} /> 
        </div>

    </div>
  )
}

export default ProjectSection