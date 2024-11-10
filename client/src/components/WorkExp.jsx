import React from 'react'
import WorkCard from './WorkCard'

const WorkExp = () => {
  return (
    <div className='bg-rose-700'>
      <div className='text-center font-thin text-4xl md:text-8xl leading-snug bg-rose-700 text-white p-5 '>
        Experience & Internships
      </div>
      <div className='p-5'>
        <WorkCard company="IIT DELHI" title="Full Stack Developer" stack="ReactJS, NestJS, Flutter, Python, OpenCV, Azure "/>
        <WorkCard company="ANAND AUTOMOTIVE PVT LTD" title="Software Developer Intern" stack="Java EE, Spring, ReactJS, Azure Cloud Services, MySQL "/>
      </div>
    </div>
  )
}

export default WorkExp
