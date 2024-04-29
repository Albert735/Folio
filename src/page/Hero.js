import React from "react";
import pic1 from "../assets/img/jan-antonin-kolar-8uWnMvmffOs-unsplash.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div>
            <img src="" alt="" />
        </div>
      <div>
        <h1 className="absolute right-0 bottom-0 bg-transparent text-[8rem] font-bold goldfish">
          PORTFOLIO
        </h1>
        <img src={pic1} alt="" className="h-[20rem] object-cover" />
      </div>
    </div>
  );
};

export default Hero;
