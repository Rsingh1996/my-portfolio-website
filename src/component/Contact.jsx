import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center  items-center p-4 bg-[#0a192f] "
    >
      <form
        method="POST"
        action="https://getform.io/f/ce445da0-4dea-48be-95d5-1537262cf052"
        className="flex flex-col max-w-[1000px] w-full"
      >
        <div className="pb-8 text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Contact
          </p>
          <p className=" py-4">Drop me an email </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className=" my-4 bg-[#ccd6f6] p-2"
          type="email"
          placeholder="Email (format: xxx@xxx.xxx)"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="messgae"
          rows={10}
          required
        ></textarea>
        <button className="rounded-lg text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 mx-auto my-8 py-3 font-bold text-lg flex items-center">
          Let's collaborate !
        </button>
      </form>
    </div>
  );
};

export default Contact;
