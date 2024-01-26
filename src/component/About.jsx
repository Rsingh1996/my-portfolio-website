import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className=" sm:text-right text-4xl font-bold">
              Hi, I am Rahul, nice to meet you. Please take a look arroud.
            </p>
          </div>
          <div>
            <p>
              As a passionate React Developer, I thrive on crafting intuitive
              and responsive web experiences. With a strong foundation in React
              fundamentals and a commitment to staying abreast of industry
              trends, I bring creativity and efficiency to every project,
              ensuring impactful and user-centric solutions."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
