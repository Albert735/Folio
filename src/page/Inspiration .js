import React from "react";
import pic1 from "../assets/img/daniele-d-andreti-5L2uWU7oeiQ-unsplash.jpg";
import pic2 from "../assets/img/andrey-grinkevich-GeazrTcSseE-unsplash.jpg";
import svg1 from "../assets/svg/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg";
import pic3 from "../assets/img/jean-baptiste-d-mTfhOmhvvQo-unsplash.jpg";

const Inspiration = () => {
  return (
    <div className="flex justify-center items-center ">
      <p className="flex goldfish flex-wrap justify-center items-center leading-loose bg-[#f3efe2] text-[3rem] text-black w-[60rem] p-5 rounded-2xl ">
        A CREATIVE{" "}
        <img
          src={pic1}
          alt=""
          className="h-[4rem] rounded-full object-cover mx-3"
        />{" "}
        MIND KNOWS{" "}
        <img
          src={pic2}
          alt=""
          className="h-[4rem] w-[10rem] rounded-full object-cover mx-3"
        />{" "}
        HOW TO DO THE{" "}
        <img
          src={svg1}
          alt=""
          className="rounded-full p-2 mx-2 flex justify-center items-center"
        />
        RIGHT THING AT THE{" "}
        <img
          src={pic3}
          alt=""
          className="h-[4rem] w-[10rem] rounded-full object-cover mx-3"
        />{" "}
        RIGHT PLACE AND RIGHT TIME
      </p>
    </div>
  );
};

export default Inspiration;
