import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Cursor from "../../CustomCursor/Cursor";
import pic3 from '../../assets/img/beatspreloader.png'


const Project3 = () => {
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
          03
        </p>
      </div>

      <div className="flex justify-center items-center mt-[3rem]">
        <div className="flex justify-between items-start gap-[2rem]">
          <div>
            <img
              src={pic3}
              alt=""
              className="h-[32rem] w-[50rem] rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-start items-start p-5 w-[40rem] space-y-7">
            <h1 className="text-5xl">Beats Pre Loader</h1>
            <p className="text-2xl leading-loose font-extralight">
              Enjoy award-winning Beats sound with wireless listening freedom
              and a sleek, streamlined design with comfortable padded earphones,
              delivering first-rate playback.
            </p>
            <span>
              <h2 className="text-xl font-bold ">Stack</h2>
              <p className="text-lg font-thin">Html and Css</p>
            </span>
            <span>
              <h2 className="text-xl font-bold ">Link</h2>
              <p className="text-lg font-thin">
                <a
                  href="https://beats-preloader.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://beats-preloader.netlify.app/
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project3;
