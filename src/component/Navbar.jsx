import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import Resume from "../assets/Rahul_CV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const emailAddress = `https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRsbZKBGqqwwSTkrKPkQtPdDzpHBPHnkKDlfxpCSrHmPBNFvZmLbWfwhSTKmtJhXKFsnM`;
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img
          src={Logo}
          alt="Logo image"
          style={{ width: "80px", mixBlendMode: "color-dodge" }}
        />
      </div>
      {/* manu */}
      <ul className=" hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="career" smooth={true} duration={500}>
            Career
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile maue */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="career" smooth={true} duration={500}>
            Career
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/rahulna1996/"
              target="_blank"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://github.com/Rsingh1996"
              target="_blank"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[10px] duration-300 bg-[#788db7]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href={emailAddress}
              target="_blank"
            >
              Mail
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#455f38]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href={Resume}
              target="_blank"
              download="Rahul_CV.pdf"
            >
              Resume
              <ImProfile size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
