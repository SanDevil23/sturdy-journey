import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='p-10 shadow-md  text-black  bg-rose-50  hover:shadow-black border border-red-200 mb-3 rounded-md'>
      <div className='font-extrabold text-xl'>
        {props.title}
      </div>
      <hr className='text-black'/>
      <div id="company">
        <b>Company :</b><i> {props.company} </i>
      </div>
      <div>
        <b>Tech Stack :</b><i> {props.stack} </i>
      </div>

      <div>
        <b>Description :</b><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </i>
      </div>
      
    </div>
  )
}

export default WorkCard;


// bg-gradient-to-tr from-slate-700 to-cyan-700