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
              Hi, I am Rahul, nice to meet you. Please take a look aroud.
            </p>
          </div>
          <div>
            <p>
              As a passionate React Developer, I really enjoy making websites
              that are easy to use and work well on any device. I know a lot
              about React and always try to keep up with the latest in web
              development. I like to be creative and work efficiently on
              projects, aiming to make things that really help and appeal to
              users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
