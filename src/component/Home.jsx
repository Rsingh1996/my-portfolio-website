import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p1 className="text-yellow-600">My name is</p1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rahul Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Engineer
        </h2>
        <p1 className="text-[#8892b0] py-4 max-w-[700px]">
          I am a Software Engineer with expertise in both frontend and backend
          development, using TypeScript for enhanced type safety. Skilled in
          creating dynamic web applications, I am proficient in React, state
          management, and responsive design on the frontend, as well as backend
          technologies like Node.js and database management.
        </p1>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group  border-2 px-6 py-3 mx-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
