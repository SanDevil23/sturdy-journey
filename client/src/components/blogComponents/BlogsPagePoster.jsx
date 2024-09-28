import React from 'react'

const BlogsPagePoster = (props, ref) => {
  return (
    <div ref ={ref} className='text-black bg-slate-50 p-20'>
      <div className='text-center font-extralight text-8xl leading-snug'>Blog Page Coming Soon</div>
      <div className='text-center text-2xl font-extralight'>Contribute to the blog page by writing articles about your favorite topics and interests</div>
      <div className='flex justify-center p-4'>
      <a href="/blogs">  <button className=' bg-black hover:bg-violet-950 text-white font-semibold shadow-md shadow-slate-950 rounded-md  p-2 border-1 border-black'>Click Here</button>
      </a>
      </div>
    </div>
  )
}

export default React.forwardRef(BlogsPagePoster);
