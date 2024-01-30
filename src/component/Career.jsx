import React from "react";

const Career = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              Career
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className=" sm:text-right text-2xl ">JULY 2021 - CURRENT</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className=" sm:text-right text-2xl font-bold">
              React Developer @Goldman Sachs
            </p>
            <p>
              Leveraged ReactJS to construct a reporting dashboard that
              seamlessly connects to a ticketing database via an API. This
              intuitive dashboard effectively presents outage records,
              categorizing them by severity levels in a user-friendly,
              consolidated format. • Designed a user-friendly notification tool
              GUI using ReactJS, enabling automated email notifications to
              inform users about service disruptions caused by network changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
