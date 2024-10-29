import React from "react";
import fireworks from "../assets/FireWorks.json";
import wish from "../assets/DiwaliWish.json";

import Lottie from "lottie-react";

const DiwaliBash = () => {
  return (
    <div className="grid grid-cols-2 gap-5 bg-gradient-to-tr from-red-500 p-20 h-full self-center">
      <div className="flex flex-col justify-center items-center">
        {/* <div
          id="head"
          className="flex text-4xl text-center text-green-100 font-bold"
        >
          Days of Lights and Festivities is here
        </div> */}
        <div className="">
          <Lottie animationData={wish} className="" />
        </div>
        {/* <div className="text-black text-center text-xl text-yellow-100 p-1 w-1/2">
          <p>"May this festival of lights bring the radiance of positivity in our thoughts, sweetness in our words & joy in our actionsby igniting the lights of knowledge."
          </p>
          <p>"Let us celebrate this Diwali by transforming our old habits and attitudes to new awareness & hope, spreading the sparkle of goodwill and enthusiasm to all"</p>          
          
        </div> */}
      </div>

      <div className="flex justify-center items-center">
        <Lottie animationData={fireworks} className="" />
      </div>
    </div>
  );
};

export default DiwaliBash;
