import React from "react";
import up3 from "../assets/svg/arrow-up-03-stroke-rounded.svg";

const ArrowUp = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5">
      <img
        src={up3}
        onClick={handleClick}
        alt=""
        className="w-[3rem] bg-[#76ABAE] text-[#EEEEEE] rounded-lg p-2"
      />
    </div>
  );
};

export default ArrowUp;
