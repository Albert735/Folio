import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/img/anna-wangler-_GqwoiT7QY8-unsplash.jpg";
// import pic2 from '../assets/img/anna-wangler-_GqwoiT7QY8-unsplash.jpg';
// import pic3 from '../assets/img/anna-wangler-_GqwoiT7QY8-unsplash.jpg';
// import pic4 from '../assets/img/anna-wangler-_GqwoiT7QY8-unsplash.jpg';
// import pic5 from '../assets/img/original-7562a5fb787656220eb91a6f32f81f07.png';

const Projects = () => {
  return (
    <div className="h-full text-[#EEEEEE] w-[100%] space-y-[5rem] p-5">
      <div className="flex justify-between items-start p-5">
        <Link to="/">
          <p className="text-3xl font-mono">A</p>
        </Link>

        <p className="text-2xl  bg-white rounded-full px-3 py-3 text-black font-mono">
          02
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={pic1} alt="" />
          <span>
            <p className="text-3xl">anna-wangler-_GqwoiT7QY8-unsplash</p>
            <span>
                
            </span>
          </span>
        </div>
        {/* <div>
            <img src={pic2} alt="" />
        </div>
        <div>
            <img src={pic3} alt="" />
        </div>
        <div>
            <img src={pic4} alt="" />
        </div>
        <div>
            <img src={pic5} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
