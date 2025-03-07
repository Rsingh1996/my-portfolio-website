import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACTIMG from "../assets/react.png";
import GITHUB from "../assets/github.png";
import PYTHON from "../assets/python.png";
import TYPESCRIPT from "../assets/typescript.png";
import NODE from "../assets/node.png";
import AWS from "../assets/aws.png";
import MARIADB from "../assets/mariadb.jpg";
import JIRA from "../assets/jira.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Skills
          </p>
          <p className="py-4 ">There are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JAVASCRIPT}
              alt="JAVASCRIPT icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACTIMG} alt="REACTIMG icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GITHUB} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={PYTHON}
              alt="PYTHON icon"
              width="80px"
              height="80px"
              style={{ mixBlendMode: "screen" }}
            />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NODE} alt="NODE icon" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TYPESCRIPT}
              alt="TYPESCRIPT icon"
            />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MARIADB} alt="MARIADB icon" />
            <p className="my-4">MARIADB</p>
          </div>
          <div className="shadow-md shadow-[#040c26] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JIRA} alt="JIRA icon" />
            <p className="my-4">JIRA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
