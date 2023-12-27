import React from "react";
import hero from "../assets/hero.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col h-full items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Web Developer
          </h2>
          <p className="text-gray-400 py-4 mx-w-md">
            I have 1 year of experience in building and designing a web
            application. Currently, I love to work on web application using
            technologies like React, Tailwind, WindiCSS NodeJS HTML and CSS.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center cursor-pointer rounded-md cursor-pointer bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-200">
                <RiArrowRightSLine size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
