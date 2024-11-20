import React from 'react'
import WorkCard from './WorkCard'

const WorkExp = () => {
  return (
    <div className='bg-rose-700'>
      <div className='text-center font-thin text-4xl md:text-8xl leading-snug bg-rose-700 text-white p-5 '>
        Experience & Internships
      </div>
      <div className='p-5'>
        <WorkCard company="IIT DELHI" title="Full Stack Developer" stack="ReactJS, NestJS, Flutter, Python, OpenCV, Azure " desc="Developing a motion sensible application with Flutter, React & NextJS. Responsible for developing backend and
frontend architecture for the web and mobile platforms. Also working on how to implement object detection and
recognition using computer vision.
"/>
        <WorkCard company="ANAND AUTOMOTIVE PVT LTD" title="Software Developer Intern" stack="Java EE, Spring, ReactJS, Azure Cloud Services, MySQL " desc="Responsible for debugging and updating existing applications. Worked on various in-house production datasets.
A Major focus on Java and related frameworks like Spring, Spring Boot. Developed Microservice for SSO
Authentication (OAuth2.0) with Spring and Azure AD."/>
      </div>
    </div>
  )
}

export default WorkExp
