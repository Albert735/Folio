import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".header-1", {
      stagger: 0.1,
      duration: 1,
      repeat: -1,
      y: 100,
      ease: "none",
      rotate: 360,
      
    });
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div>
        <h1 className="flex header  flex-col text-[8rem] font-bold goldfish">
          <span className="header-1 inset-1">FOLIO-</span>
          <span className="header-2 text-end">V1</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
