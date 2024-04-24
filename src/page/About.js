import React from "react";
import me from "../assets/img/7 Items I Never Buy From the Women's Section.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".heading-1",
      { duration: 2, y: 100, opacity: 1, ease: "power3.out" },
      { y: -100, opacity: 1 }
    );
    gsap.fromTo(
      ".heading-2",
      { duration: 1, x: -1000, opacity: 1, ease: "power2.in" },
      { x: 0, opacity: 1 }
    );
    gsap.fromTo(
        "About-heading",
        { duration: 1, x: 300, opacity: 1, ease: "power1.in" },
        { x: -200, opacity: 1 }
    );
    gsap.fromTo(
        "About-text",
        { duration: 1, y: -300, opacity: 1, ease: "power3.in" },
        { y: -200, opacity: 1 }
    )
  });
  return (
    <div className=" h-full text-[#EEEEEE] w-[100%] space-y-[5rem] p-5">
      <div className="flex justify-between items-start p-5">
        <p className="text-3xl font-mono">A</p>
        <p className="text-2xl  bg-white rounded-full px-3 py-3 text-black font-mono">
          02
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="heading-1 text-[10rem] font-mono font-bold">
          QUAYE ANDREWS ALBERT AWULEY
        </h1>

        <h2 className="heading-2 text-[5rem] flex justify-center items-center font-mono font-bold gap-[3rem]">
          <span className="">
            <span>F</span>
            <span>R</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
          </span>
          <span className="">
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </span>
        </h2>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex justify-center items-center">
          <h1 className="About-heading text-[5rem]">About</h1>
        </div>

        <div className=" flex justify-center items-center w-[30rem]">
          <p className="About-text text-3xl leading-relaxed w-full">
            I am a frontend developer with a passion for building web
            applications. I have a strong understanding of HTML, CSS,
            JavaScript, React,Tailwind CSS and GSAP, and I am always looking for
            new and innovative ways to improve my skills. I am excited to
            continue learning and growing as a developer.
          </p>
        </div>
        <div>
          <img
            src={me}
            alt=""
            className="brightness-125 rounded-2xl h-[40rem]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <p className="text-7xl text-center font-sans leading-loose">
          In every corner of the world I've <br /> explored, I've found a piece
          of <br />
          myself waiting.
        </p>
      </div>
      <div className="flex justify-center items-start gap-[15rem] xl:p-[5rem]">
        <span className="flex flex-col gap-6">
          <span className="text-[3rem]">Lets</span>
          <span>Get in touch with me</span>
        </span>
        <span className="flex flex-col gap-6">
          <span className="text-[3rem]">Work</span>
          <span className="flex flex-col gap-[2rem]">
            <span>E-mail</span>
            <span>albertquaye735@gmail.com</span>
          </span>
        </span>
        <span className="flex flex-col gap-6">
          <span className="text-[3rem]">Together</span>
          <span className="flex flex-col gap-[2rem]">
            <span>Contact</span>
            <span>Available</span>
          </span>
          <span>
            <p>
              {" "}
              2024- portfolio by Quaye. <br /> All rights reserved.{" "}
            </p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
