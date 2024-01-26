import React from "react";
import makeyourtrip from "../assets/makeyourtrip.png";
import machinehack from "../assets/machinehack.png";
import quotegenerator from "../assets/quotegenerator.png";
import tictactoe from "../assets/tic-tac-toe.png";
import joketeller from "../assets/joketeller.png";
import colorpalette from "../assets/color-palette.png";

const Projects = () => {
  return (
    <div name="work" className="w-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Projects
          </p>
          <p className="py-4">Checkout some of my recent Projects</p>
        </div>
        {/*container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {/*  Grid Item*/}
          <div
            style={{ backgroundImage: `url(${makeyourtrip})` }}
            className="shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effact */}
            <div className="w-full h-full text-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tour Planner App
              </span>
              <div className="pt-8 ">
                <a
                  href="https://rsingh1996.github.io/make_your_trip/"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Rsingh1996/make_your_trip"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${machinehack})` }}
            className="shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effact */}
            <div className="w-full h-full text-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Machinehack GUI
              </span>
              <div className="pt-8 ">
                <a
                  href="https://rsingh1996.github.io/machinehack-clone/"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Rsingh1996/machinehack-clone"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${colorpalette})` }}
            className="shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effact */}
            <div className="w-full h-full text-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Color Palette
              </span>
              <div className="pt-8 ">
                <a
                  href="https://rsingh1996.github.io/Color-Palette/"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Rsingh1996/Color-Palette"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${quotegenerator})` }}
            className="shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effact */}
            <div className="w-full h-full text-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Quote Generator
              </span>
              <div className="pt-8 ">
                <a
                  href="https://rsingh1996.github.io/QuoteGenerator/"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Rsingh1996/QuoteGenerator"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${joketeller})` }}
            className="shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effact */}
            <div className="w-full h-full text-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Joke Teller App
              </span>
              <div className="pt-8 ">
                <a
                  href="https://rsingh1996.github.io/Joke-Teller/"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Rsingh1996/Joke-Teller"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${tictactoe})` }}
            className="shadow-lg shadow-[#040c26] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effact */}
            <div className="w-full h-full text-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tic Tac Toe Game
              </span>
              <div className="pt-8 ">
                <a
                  href="https://rsingh1996.github.io/tic-tac-toe/"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Rsingh1996/tic-tac-toe"
                  target="_blank"
                >
                  <button className=" rounded-lg text-gray-700 px-4 m-2 py-3 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
