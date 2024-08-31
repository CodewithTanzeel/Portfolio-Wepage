import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import logo from '../../../public/assets/picture/logo.png';
import { FaStackOverflow } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-yello-1  bg-slate-950">
      <footer className="text-neutral-50 body-font">
        <div className="container px-3 py-1 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image
              src={logo}
              alt="QuantomVerse"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl cursor-pointer">TanzeelAhmad</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 @CodewithTanzeel
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
            <Link
              target="_blank"
              href={"https://stackoverflow.com/users/26821927/nevermind21"}
              className="text-neutral px-5"
            >
              <FaStackOverflow className="text-3xl hover:text-[#e7700d]" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com/@Quantom-Verse"}
              className="text-neutral px-5"
            >
              <BsYoutube className="text-3xl hover:text-[#ff0000]" />
            </Link>
            <Link
              target="_blank"
              href={"https://leetcode.com/u/codewithtanzeel/"}
              className="text-neutral px-5"
            >
              <SiLeetcode className="text-3xl hover:text-yellow" />

            </Link>




          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

