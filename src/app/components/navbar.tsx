import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import logo from "../../../public/assets/picture/logo.png";

const Navbar = () => {
  return (
    <div className="bg-slate-950 z-50 sticky top-0 ">
      <header className="text-neutral-50 body-font">
        <div className="container mx-auto flex flex-wrap px-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src={logo}
              alt="Quantomverse"
              width={150}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl cursor-pointer">TanzeelAhmad</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center px-auto">
            <Link
              href={"/"}
              className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
            >
              About
            </Link>
            <Link
              href={"#skill"}
              className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
            >
              Skills
            </Link>
            <Link
              href={"#project"}
              className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
            >
              Projects
            </Link>
            <Link
              href={"#Contact"}
              className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
            >
              Contact
            </Link>
          </nav>
          <a href="/assests/cv/myCv.pdf">
            <button
              className="inline-flex items-center
            p-10 bg-slate-900 border-0 py-1 px-3 focus:outline-none hover:bg-white
            hover:text-blue-blue rounded-3xl text-base mt-4 md:mt-0"
            >
              Resume
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
