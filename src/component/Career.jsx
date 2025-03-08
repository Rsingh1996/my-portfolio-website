import React from "react";

const Career = () => {
  return (
    <div name="career" className="w-full  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center  w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              Career
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full pb-6 grid sm:grid-flow-col md:grid-cols-11 sm:gap-6 md:gap-8 px-4 ">
          <div className="md:col-span-5">
            <p className=" sm:text-right text-2xl ">Jun 2024 – Current</p>
          </div>
          <div className=" w-[0px] border-r-4"></div>
          <div className="flex flex-col md:col-span-5 items-start gap-3">
            <p className=" sm:text-left text-2xl font-bold">
              Software Engineer III @Elsevier
            </p>
            <ul>
              <p>
                - Developed and maintained a full-stack application using
                NodeJS, ReactJS, andTypeScript.
              </p>
              <p>
                - Actively participated in daily standups and Agile Retro &
                Sprint planing, effectively collaborated with cross-functional
                team to manage user stories and backlog item using Jira.
              </p>
              <p>
                - Conducted research and developed spike stories to evaluate and
                implement innovative solutions, while documenting findings to
                enhance knowledge sharing and best practices across the
                organization.
              </p>
              <p>
                - Designed and developed reusable UIcomponent library,
                establishing organization-wide standards for UI consistency ande
                fficiency.
              </p>
            </ul>
          </div>
        </div>

        <div className="max-w-[1000px] w-full pb-6 grid sm:grid-flow-col md:grid-cols-11 sm:gap-6 md:gap-8 px-4 ">
          <div className="md:col-span-5">
            <p className=" sm:text-right text-2xl ">Jul 2021 – Jun 2024</p>
          </div>
          <div className=" w-[0px] border-r-4"></div>
          <div className="flex flex-col md:col-span-5 items-start gap-3">
            <p className=" sm:text-left text-2xl font-bold">
              React Developer @Goldman Sachs
            </p>
            <ul>
              <p>
                - Leveraged ReactJS to construct a reporting dashboard that
                seamlessly connects to a ticketing database via an API. This
                intuitive dashboard effectively presents outage records,
                categorizing them by severity levels in a user-friendly,
                consolidated format.
              </p>
              <p>
                - Designed a user-friendly notification tool GUI using ReactJS,
                enabling automated email notifications to inform users about
                service disruptions caused by network changes.
              </p>
              <p>
                - Teamed up with network engineers to gain insights into tool
                requirements and user preferences, skillfully transforming
                theirinsights into user-friendly interfaces.
              </p>
            </ul>
          </div>
        </div>

        <div className="max-w-[1000px] w-full pb-6 grid sm:grid-flow-col md:grid-cols-11 sm:gap-6 md:gap-8 px-4 ">
          <div className="md:col-span-5">
            <p className=" sm:text-right text-2xl ">Aug 2019 – Jul 2021</p>
          </div>
          <div className=" w-[0px] border-r-4"></div>
          <div className="flex flex-col md:col-span-5 items-start gap-3">
            <p className=" sm:text-left text-2xl font-bold">
              Network Admin @JUBILANT FOOD WORKS LIMITED
            </p>
            <ul>
              <p>
                - Handling multiple stores (1500+) and giving solutions to
                improve the Network performance and stability.
              </p>
              <p>
                - Maximizing network performance by monitoring, troubleshooting
                various network issues
              </p>
            </ul>
          </div>
        </div>

        <div className="max-w-[1000px] w-full pb-6 grid sm:grid-flow-col md:grid-cols-11 sm:gap-6 md:gap-8 px-4 ">
          <div className="md:col-span-5">
            <p className=" sm:text-right text-2xl ">Oct 2018 – Jul 2019</p>
          </div>
          <div className=" w-[0px] border-r-4"></div>
          <div className="flex flex-col md:col-span-5 items-start gap-3">
            <p className=" sm:text-left text-2xl font-bold">
              Network Engineer @TATA CONSULTANCY SERVICES
            </p>
            <ul>
              <p>
                - Monitor network devices and servers to detect and resolve
                issues before services are impacted.
              </p>
            </ul>
          </div>
        </div>

        <div className="max-w-[1000px] w-full pb-6 grid sm:grid-flow-col md:grid-cols-11 sm:gap-6 md:gap-8 px-4 ">
          <div className="md:col-span-5">
            <p className=" sm:text-right text-2xl ">Aug 2017 – Aug 2018</p>
          </div>
          <div className=" w-[0px] border-r-4"></div>
          <div className="flex flex-col md:col-span-5 items-start gap-3">
            <p className=" sm:text-left text-2xl font-bold">
              Network Admin @WIPRO LIMITED
            </p>
            <ul>
              <p>
                Monitoring all the network devices and ISP link using MRTG tool,
                Tshoot of various network issues
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
