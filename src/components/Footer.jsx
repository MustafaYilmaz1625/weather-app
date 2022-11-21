import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="fixed bottom-0 sm:flex  justify-between    bg-slate-600 w-full p-3">
      <div>
        <h1 className="text-center md:text-start">
          Copyright &copy; New Design 2023
        </h1>
      </div>
      <div>
        <ul className="flex flex-row py-2 md:py-1 justify-center">
          <li className="w-[40px] h-[30px] flex  justify-between items-center rounded-xl   bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="https://www.linkedin.com/in/mustafa-y%C4%B1lmaz-/"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[40px] h-[30px] flex justify-between items-center rounded-xl  bg-[#262626]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/MustafaYilmaz1625"
            >
              <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[40px] h-[30px] flex justify-between items-center rounded-xl  bg-[#25313e]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mustafa-yılmaz-/overlay/1635494929296/single-media-viewer/"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-center md:text-end">Privacy Policy</h1>
      </div>
    </div>
  );
}

export default Footer;
