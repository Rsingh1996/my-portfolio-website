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
          I'm a React Developer
        </h2>
        <p1 className="text-[#8892b0] py-4 max-w-[700px]">
          I am a React Developer skilled in creating dynamic and scalable web
          applications, proficient in React fundamentals, component-based
          architecture, state management, and responsive design.
        </p1>
        <div>
          <button className="text-white group border-2 px-6 py-3 mx-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
            View Work{" "}
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
