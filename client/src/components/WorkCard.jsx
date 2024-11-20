import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='p-10 shadow-md  text-black  bg-rose-50  hover:shadow-black border border-red-200 mb-3 rounded-md cursor-pointer'>
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
        <b>Description :</b><i> {props.desc} </i>
      </div>
      
    </div>
  )
}

export default WorkCard;


// bg-gradient-to-tr from-slate-700 to-cyan-700