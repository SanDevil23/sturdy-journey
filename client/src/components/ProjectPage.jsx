import React from 'react';

const ProjectPage = () => {
  return (
    <div className="">
      <div className="text-center font-semibold text-5xl md:text-8xl leading-snug text-white p-5">
        Projects
      </div>
      <div className="flex flex-col justify-center items-center text-center font-mono text-lg md:text-2xl mt-4">
        I have built various projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased on this site, please contact me!
        <button className="mt-4 text-violet-500 hover:text-violet-700 font-semibold transition duration-200 ease-in-out">
          See Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
