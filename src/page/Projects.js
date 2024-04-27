import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/img/anna-wangler-_GqwoiT7QY8-unsplash.jpg";
import pic2 from "../assets/img/aerial-shot-cliffs-covered-greenery-surrounded-by-sea-sunlight.jpg";
import pic3 from "../assets/img/blue-wall-texture-slate-background.jpg";
import pic4 from "../assets/img/road-surrounded-by-rocky-mountains-beautiful-sunset-evening.jpg";
import pic5 from "../assets/img/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass.jpg";
import ArrowUp from "../components/ArrowUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".cards", {
      yPercent: 100,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".cards ",
        markers: true,
        start: "top top",
        scrub: true,
        pin: true,
        end: "+=4000px",
      },
    });
  });

  return (
    <div
      id="projects"
      className="h-full text-[#EEEEEE] w-[100%] space-y-[5rem] p-5"
    >
      <div className="flex justify-between items-start p-5">
        <Link to="/">
          <p className="text-3xl font-mono">A</p>
        </Link>

        <p className="text-2xl  bg-white rounded-full px-3 py-3 text-black font-mono">
          03
        </p>
      </div>
      <div className="flex justify-between items-start mx-9">
        <div>
          <img src={pic1} alt="" className="h-[32rem] w-[50rem] rounded-xl" />
        </div>
        <div className="flex flex-col justify-start items-start p-5 w-[50rem] space-y-7">
          <h1 className="text-5xl">Beats by Bagna</h1>
          <p className="text-2xl leading-loose font-extralight">
            Enjoy award-winning Beats sound with wireless listening freedom and
            a sleek, streamlined design with comfortable padded earphones,
            delivering first-rate playback.
          </p>
          <span>
            <h2 className="text-xl font-bold ">Stack</h2>
            <p className="text-lg font-thin">
              React Js , Tailwind , Framer Motion, Figma, Vercel, Netlify
            </p>
          </span>
          <span>
            <h2 className="text-xl font-bold ">Link</h2>
            <p className="text-lg font-thin">
              <a
                href="https://beats-by-bagna.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://beats-by-bagna.netlify.app/
              </a>
            </p>
          </span>
          <span>
            <h2 className="text-xl font-bold ">Status</h2>
            <p className="text-lg font-thin">In Development</p>
          </span>
        </div>
      </div>
      <div className="relative top-56 cards-container flex flex-col justify-center items-center gap-[10rem] bg-transparent">
        <span className="cards  flex justify-center items-center bg-transparent ">
          <img src={pic2} alt="" className="h-[45rem] w-[70rem]  rounded-3xl" />
        </span>
        <span className="cards flex justify-center items-center bg-transparent">
          <img src={pic3} alt="" className="h-[45rem] w-[70rem] rounded-3xl" />
          {/* <p className="text-2xl absolute top-[20rem] -right-[3.5rem] bg-transparent ">
            Product Page
          </p> */}
        </span>
        <span className="cards flex justify-center items-center bg-transparent">
          <img src={pic4} alt="" className="h-[45rem] w-[70rem]  rounded-3xl" />
          {/* <p className="text-2xl absolute top-[20rem] -right-[2rem] bg-transparent ">
            Case
          </p> */}
        </span>
        <span className="cards flex justify-center items-center bg-transparent">
          <img src={pic5} alt="" className="h-[45rem] w-[70rem]  rounded-3xl" />
          {/* <p className="text-2xl absolute top-[20rem] -right-[3.5rem] bg-transparent ">
            Testimonial
          </p> */}
        </span>
      </div>
      <a href="#projects">
        <ArrowUp />
      </a>
    </div>
  );
};

export default Projects;
