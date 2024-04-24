import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const onClick = () => setOpen(false);

  const [load, setLoad] = React.useState(false);
  const handleLoad = () => setLoad(!load);

  useGSAP(() => {
    gsap.fromTo(
      ".loader-1",
      { y: -1000, opacity: 0 },
      { y: 0, opacity: 1, duration: 3 }
    );
    gsap.fromTo(
      ".loader-2",
      { y: -2000, opacity: 1 },
      { y: 0, opacity: 1, duration: 3 }
    );
    gsap.fromTo(
      ".loader-3",
      { y: -3000, opacity: 0 },
      { y: 0, opacity: 1, duration: 4 }
    );
    gsap.fromTo(
      ".loader-4",
      { y: -4000, opacity: 0 },
      { y: 0, opacity: 1, duration: 5 }
    );
  });

  return (
    <div className="flex text-[#EEEEEE] justify-between items-center w-full  p-[1rem] ">
      <div>
        <p className="text-3xl">A</p>
      </div>
      <div>
        <CgMenuMotion
          onClick={() => {
            handleClick();
            handleLoad();
          }}
          className="text-3xl "
        />
        {open && (
          <>
            <div className="loader-1 fixed  top-0 left-0 w-screen h-screen bg-[#EEEEEE]"></div>
            <div className="loader-2 fixed  top-0 left-0 w-screen h-screen bg-[#76ABAE]"></div>
            <div className="loader-3 fixed  top-0 left-0 w-screen h-screen bg-[#31363F]"></div>
            <div className="loader-4 fixed justify-start items-center w-screen h-[100vh] top-0 left-0 bg-[#222831]  text white">
              <div className="flex flex-col justify-between w-screen  h-screen">
                <div className="flex justify-between items-center p-5">
                  <IoMdClose className="text-3xl" onClick={onClick} />
                  <p className="xl:text-3xl text-xl  p-5">A</p>
                </div>
                <div className="xl:text-8xl text-[2rem]  font-mono ">
                  <ul className="flex flex-col justify-center items-start w-full px-9 xl:max-w-screen-xl xl:mx-auto space-y-[4rem] ">
                    <li>
                      <span className="xl:text-3xl text-[12px]">01.</span>Home
                    </li>
                    <li>
                      <Link to="/about">
                        <span className="xl:text-3xl text-[12px]">02.</span>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects">
                        <span className="xl:text-3xl text-[12px]">03.</span>
                        Projects{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <span className="xl:text-3xl text-[12px]">04.</span>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-end ">
                  <div className="p-5 xl:text-xl font-mono text-[12px]">
                    French
                  </div>
                  <div className="p-5 ">
                    <p className=" xl:text-xl text-[12px] font-mono">
                      © 2024 - Portfolio. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
