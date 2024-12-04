import React from 'react';

const BlogsPagePoster = ((props, ref) => {
  return (
    <div ref={ref} className='text-black bg-slate-200 p-6 md:p-20'>
      <div className='text-center font-extralight text-4xl md:text-8xl leading-snug'>
        Blog Page Coming Soon
      </div>
      <div className='text-center text-lg md:text-2xl font-extralight mt-4'>
        Contribute to the blog page by writing articles about your favorite topics and interests.
      </div>
      <div className='flex justify-center p-4 mt-6'>
          <button  className='bg-black hover:bg-violet-700 text-white font-semibold shadow-md shadow-slate-950 rounded-md p-2 border border-black transition duration-200 ease-in-out'>
            Click Here
          </button>

      </div>
    </div>
  );
});

export default React.forwardRef(BlogsPagePoster);
