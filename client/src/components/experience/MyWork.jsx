import React from 'react'

const MyWork = () => {
  return (
    <div className='bg-white'>
<div className='grid grid-cols-2 gap-4 bg-white p-5'>

        <div className='text-4xl p-20'>
            <h1 className='font-bold'>Full Stack Developer Intern</h1>
            <p className='text-xl font-mono mt-6 text-left'><b>Organization : </b> IIT, Delhi</p>
            <p className='text-xl font-mono mt-4 text-left'><b>Duration : </b> Sept,2024 - Present</p>

            <p className='text-xl font-mono mt-4 text-left'>Developing a motion sensible application with Flutter, React & NextJS. Responsible for developing backend and frontend architecture for the web and mobile platforms. Also working on how to implement object detection and recognition using computer vision. </p>
        </div>

        <div className='flex justify-center self-center h-max'>
            <img className='shadow-black shadow-2xl' src="https://www.ikf.co.in/wp-content/uploads/aesthetics-vs-functionality-1.jpg" alt="" width={600} />
        </div>
</div>

<div className='grid grid-cols-2 gap-4 bg-white p-5 mt-4'>

        <div className='flex justify-center'>
            <img className='shadow-black shadow-2xl' src="https://www.heliyssolutions.com/wp-content/uploads/2024/03/project-details-2.jpg" alt="" width={600} />
        </div>

        <div className='text-4xl p-2'>
            <h1 className='font-bold'>Software Developer Intern</h1>
            <p className='text-xl font-mono mt-6 text-left'><b>Company : </b> Anand Automotive Pvt Ltd</p>
            <p className='text-xl font-mono mt-4 text-left'><b>Duration : </b> July,2023 - December,2023</p>

            <p className='text-xl font-mono mt-4 text-left'>Responsible for debugging and updating existing applications. Worked on various in-house production datasets. A Major focus on Java and related frameworks like Spring, Spring Boot. Developed Microservice for SSO Authentication (OAuth2.0) with Spring and Azure AD.</p>
        </div>
</div>
        
    </div>
  )
}

export default MyWork
