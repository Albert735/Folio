import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" h-full text-[#EEEEEE] w-[100%] space-y-[5rem]">
      <div className="flex justify-between items-start p-5">
        <Link to="/">
          <p className="text-3xl font-mono">A</p>
        </Link>
        <p className="text-2xl  bg-white rounded-full px-3 py-3 font-mono">
          04
        </p>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-[10rem] font-mono font-bold">Contact</p>
      </div>
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex justify-center items-center w-[30rem]">
          <p>kjjekjdkfekdh</p>
        </div>
        <div className="flex justify-start items-center w-[60rem]">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col justify-start items-center w-full space-y-6"
          >
            <span className="flex flex-col gap-1">
              <label htmlFor="">Name</label>
              <input
                {...register("name", {
                  required: "name",
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="bg-transparent border-2 border-gray-100 rounded-md p-3 xl:w-[40rem]"
              />
            </span>
            {errors.name && (
              <div className="text-red-600  gap-2 w-[40rem] flex justify-start items-center">
                Input a name
                <IoMdInformationCircleOutline fill="red" />
              </div>
            )}
            <span className="flex flex-col gap-1">
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-transparent border-2 border-gray-100 rounded-md p-3 xl:w-[40rem]"
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "Please enter a valid email address that includes @";
                    }
                    return true;
                  },
                })}
              />
            </span>
            {errors.email && (
              <div className="text-red-600  gap-2 w-[40rem] flex justify-start items-center">
                {errors.email.message}
                <IoMdInformationCircleOutline fill="red" />
              </div>
            )}

            <span className="flex flex-col gap-1">
              <label htmlFor="">Subject</label>
              <input
                {...register("subject", {
                  required: "subject",
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-2 border-gray-100 rounded-md p-3 xl:w-[40rem]"
              />
            </span>
            {errors.subject && (
              <div className="text-red-600  gap-2 w-[40rem] flex justify-start items-center">
                This field is required{" "}
                <IoMdInformationCircleOutline fill="red" />
              </div>
            )}

            <span className="flex flex-col gap-1">
              <label htmlFor="">
                Message <span className="text-slate-300">(Optional)</span>{" "}
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-transparent border-2 border-gray-100 rounded-md p-3 xl:w-[40rem]"
                placeholder="Message"
              ></textarea>
            </span>

            <button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="text-xl text-black w-[40rem]"
            >
              <p className="font-mono p-3 bg-white rounded-md"> Send</p>
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between h-[30rem] mx-7">
        <div className="flex justify-center items-center">
          <span>DIAGNOCIOUX.</span>
        </div>
        <div className="flex flex-col justify-center items-start space-y-3">
          <Link to="/">
            <span>HOME</span>
          </Link>

          <span>ABOUT</span>
          <span>PROJECTS</span>
          <span>CONTACT</span>
          <span>REFERENCES</span>
        </div>
        <div className="flex justify-center items-center">
          <p>albertquaye735@gmail.com</p>
        </div>
        <div className="flex justify-center items-center">
          <p>HOLD THE VISION</p>
        </div>
      </div>
      <div className="flex justify-between items-center mx-7">
        <span>Media</span>
        <span className="flex justify-between items-center space-x-8">
          <span>
            <FaLinkedinIn size={30} />
          </span>
          <span>
            <FaBehance size={30} />
          </span>
          <span>
            <FaDribbble size={30} />
          </span>
          <span>
            <FaPinterestP size={30} />
          </span>
          <span>
            <FaInstagram size={30} />
          </span>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <p>© 2024 - Portfolio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
