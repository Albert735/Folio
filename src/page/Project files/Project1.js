import React from "react";
import pic1 from "../../assets/img/beatslandingpage.png";
import pic2 from "../../assets/img/beatspreloader.png";
import ArrowUp from "../../components/ArrowUp";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Cursor from "../../CustomCursor/Cursor";

const Project1 = () => {
  function goBack() {
    window.history.back();
  }
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
  const onClick = () => setOpen(false);

  return (
    <>
    <Cursor />
      <div className="flex justify-between items-start p-5  bg-[#000000] w-[100%]">
        <span
          className="flex justify-start items-center gap-2 cursor-pointer"
          onClick={goBack}
        >
          <IoMdArrowRoundBack size={30} />
          <p className="text-xl font-mono">Back</p>
        </span>

        <p
          className="text-2xl  bg-white rounded-full px-3 py-3 text-black font-mono"
          onClick={handleClick}
        >
          03
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-[3rem]">
        <div className="flex justify-between items-start gap-[2rem]">
          <div>
            <img src={pic1} alt="" className="h-[32rem] w-[50rem] rounded-xl" />
          </div>
          <div className="flex flex-col justify-start items-start p-5 w-[40rem] space-y-7">
            <h1 className="text-5xl">Beats by Bagna</h1>
            <p className="text-2xl leading-loose font-extralight">
              Enjoy award-winning Beats sound with wireless listening freedom
              and a sleek, streamlined design with comfortable padded earphones,
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
            <img
              src={pic2}
              alt=""
              className="h-[45rem] w-[70rem]  rounded-3xl"
            />
          </span>
        </div>
        <a href="#projects">
          <ArrowUp />
        </a>
      </div>
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-70"
          onClick={onClick}
        >
          <div className="flex flex-col justify-end items-end mt-[5rem] p-6 gap-6">
            <Link to="/">
              <p className="text-3xl font-mono">Home</p>
            </Link>
            <Link to="/about">
              <p className="text-3xl font-mono">About</p>
            </Link>
            <Link to="/projects">
              <p className="text-3xl font-mono">Projects</p>
            </Link>
            <Link to="/contact">
              <p className="text-3xl font-mono">Contacts</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Project1;
