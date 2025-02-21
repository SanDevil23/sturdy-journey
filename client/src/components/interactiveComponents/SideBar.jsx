import React from "react";

const SideBar = () => {
  return (
    <div className="flex justify-center items-start w-1/2 h-screen">
      <div className="fixed w-full h-full bg-gray-100 p-6 shadow-lg z-40">
        <button className=" top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 focus:outline-none">
          &times;
        </button>
        <div className="space-y-4 font-mono">
          <div
            className={`cursor-pointer p-3 rounded-md text-center transition-colors `}
          >
            about
          </div>
          <div
            className={`cursor-pointer p-3 rounded-md text-center transition-colors `}
          >
            blogs
          </div>
          <div
            className={`cursor-pointer p-3 rounded-md text-center transition-colors`}
          >
            projects
          </div>
          <div
            className={`cursor-pointer p-3 rounded-md text-center transition-colors`}
          >
            tech
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
