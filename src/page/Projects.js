import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/img/beatslandingpage.png";
import pic2 from "../assets/img/Screenshot 2024-04-29 at 11.40.03 AM.png";
import pic3 from "../assets/img/batmanlandingpage.png";
import pic4 from "../assets/img/beatspreloader.png";
import Cursor from "../CustomCursor/Cursor";

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      {" "}
      <Cursor />
      <div className="flex justify-between items-start p-5  bg-[#000000] w-[100%]">
        <Link to="/">
          <p className="text-3xl font-mono cursor-none">A</p>
        </Link>

        <p className="text-2xl  bg-white rounded-full px-3 py-3 text-black font-mono">
          00
        </p>
      </div>
      <div
        id="projects"
        className="flex flex-col gap-[5rem] justify-center items-center  text-[#EEEEEE] bg-[#000000] w-[100%]"
      >
        <div>
          <h1 className="text-5xl font-mono">Projects</h1>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-[4rem]">
          <Link to={"/project1"}>
            <span>
              <img
                src={pic1}
                alt=""
                onClick={handleClick}
                className="h-[20rem] w-[35rem] rounded-xl"
              />
              <h1 className="text-xl text-center font-mono">Beats</h1>
            </span>
          </Link>
          <Link to={"/project2"}>
            <span>
              <img
                src={pic2}
                alt=""
                onClick={handleClick}
                className="h-[20rem] w-[35rem] rounded-xl"
              />
              <h1 className="text-xl text-center font-mono">Skate</h1>
            </span>
          </Link>
          <Link to={"/project3"}>
            <span>
              <img
                src={pic4}
                alt=""
                onClick={handleClick}
                className="h-[20rem] rounded-xl"
              />
              <h1 className="text-xl text-center font-mono">
                Beats Pre Loader
              </h1>
            </span>{" "}
          </Link>
          <Link to={"/project4"}>
            {" "}
            <span>
              <img
                src={pic3}
                alt=""
                onClick={handleClick}
                className="h-[20rem] w-[35rem] rounded-xl"
              />
              <h1 className="text-xl text-center font-mono">Batman</h1>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
