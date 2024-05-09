import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Cursor from "../../CustomCursor/Cursor";

const Project4 = () => {
  function goBack() {
    window.history.back();
  }
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
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
          04
        </p>
      </div>
    </>
  );
};

export default Project4;
