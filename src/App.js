import React from "react";
import Navbar from "./components/Navbar";
import Inspiration from "./page/Inspiration ";
import Hero from "./page/Hero";
import Section1 from "./section/Section1";
import car from "./assets/svg/shuttle-svgrepo-com.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Cursor from "./CustomCursor/Cursor";

function App() {
  let count = 0;

  let interval = setInterval(() => {
    count++;
    document.getElementById("loader").innerHTML = count + "%";
    if (count >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("preLoader").style.display = "none";
      }, 1000);
    }
  }, 60);

  useGSAP(() => {
    gsap.fromTo(
      ".car",
      {
        opacity: 3,
        x: -1000,
        ease: "elastic.in(1, 0.3)",
      },
      {
        opacity: 4,
        x: 1000,
        duration: 8,
        repeat: 5,
      }
    );
  });

  // const cursorDot = document.querySelector("[data-cursor-dot]");
  // const cursorOutline = document.querySelector("[data-cursor-out line]");

  // window.addEventListener("mousemove", function (e) => {

  //     const posX = e.clientX;
  //     const posY = e.clientY;


  //     cursorDot.style.left = `${posX}px`;
  //     cursorDot.style.top = `${posY}px`;

  //     cursorOutline.style.left = `${posX}px`;
  //     cursorOutline.style.top = `${posY}px`;


    
  // })

  return (
    <>
      <div
        id="preLoader"
        className="preLoader fixed bg-black flex justify-center items-center w-screen z-10 h-full  overflow-hidden "
      >
        <span className="flex flex-col relative justify-center items-center bg-transparent">
          <span
            id="loader"
            className="counter flex items-center justify-center text-[4rem] z-10 font-bold"
          >
            0
          </span>
          <h1
            id="loaderText"
            className="loaderText absolute flex justify-center items-center text-white/20 font-mono  text-[10rem]"
          >
            LOADING
          </h1>
          <div className="car absolute top-[8rem] w-full">
            <img src={car} alt="" className="h-[4rem]" />
          </div>
        </span>
      </div>
   

      <div className="overflow-hidden">
        <Navbar />
        <Cursor/>
        <Hero />
        <Inspiration />
        <Section1 />
      </div>
    </>
  );
}

export default App;
