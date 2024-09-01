'use client'
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import React from "react";

import logo from "../../../public/assets/picture/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-slate-950 z-50 sticky top-0">
      <header className="text-neutral-50 body-font">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo and Icon Fixed on the Left */}
          <a className="flex title-font font-medium items-center text-white">
            <Image
              src={logo}
              alt="Quantomverse"
              width={150}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl cursor-pointer">TanzeelAhmad</span>
          </a>

          {/* Hamburger Icon Fixed on the Right */}
          <div className="md:hidden">
            <button
              className="text-2xl focus:outline-none"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          {/* Navbar Links */}
          <nav
            className={`md:flex md:items-center ${navOpen ? "block" : "hidden"} w-full md:w-auto`}
          >
            <div className="flex flex-col md:flex-row items-center md:ml-auto md:mr-auto">
              <Link
                href="/"
                className="block md:inline-block mt-2 md:mt-0 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block md:inline-block mt-2 md:mt-0 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
              >
                About
              </Link>
              <Link
                href="#skill"
                className="block md:inline-block mt-2 md:mt-0 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
              >
                Skills
              </Link>
              <Link
                href="#project"
                className="block md:inline-block mt-2 md:mt-0 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
              >
                Projects
              </Link>
              <Link
                href="#Contact"
                className="block md:inline-block mt-2 md:mt-0 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
              >
                Contact
              </Link>
              <a
                href="/assests/cv/myCv.pdf"
                className="block md:inline-block mt-2 md:mt-0"
              >
                <button className="inline-flex items-center bg-slate-900 border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-slate-900 rounded-3xl text-base">
                  Resume
                  <AiOutlineCloudDownload className="text-xl ml-2" />
                </button>
              </a>
            </div>
          </nav>
        </div>

        {/* Full-Screen Overlay Sheet for Smaller Screens */}
        {navOpen && (
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-80 z-40">
            <div className="flex flex-col items-center justify-center h-full">
              <button
                className="absolute top-4 right-4 text-2xl text-white"
                onClick={() => setNavOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <nav className="flex flex-col items-center">
                <Link
                  href="/"
                  className="text-white text-2xl my-4"
                  onClick={() => setNavOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-white text-2xl my-4"
                  onClick={() => setNavOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#skill"
                  className="text-white text-2xl my-4"
                  onClick={() => setNavOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#project"
                  className="text-white text-2xl my-4"
                  onClick={() => setNavOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#Contact"
                  className="text-white text-2xl my-4"
                  onClick={() => setNavOpen(false)}
                >
                  Contact
                </Link>
                <a href="/assests/cv/myCv.pdf" className="mt-4">
                  <button className="inline-flex items-center bg-slate-900 border-0 py-2 px-4 focus:outline-none hover:bg-white hover:text-slate-900 rounded-3xl text-base">
                    Resume
                    <AiOutlineCloudDownload className="text-xl ml-2" />
                  </button>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <div className="bg-slate-950 z-50 sticky top-0 ">
//       <header className="text-neutral-50 body-font">
//         <div className="container mx-auto flex flex-wrap px-2 flex-col md:flex-row items-center">
//           {/* Icon and logo left side */}
//           <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//             <Image
//               src={logo}
//               alt="Quantomverse"
//               width={150}
//               height={100}
//               className="w-[50px]"
//             />
//             {/* Logo left Side */}
//             <span className="ml-3 text-xl cursor-pointer">TanzeelAhmad</span>
//           </a>
//           <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center px-auto">
//             <Link
//               href={"/"}
//               className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
//             >
//               Home
//             </Link>
//             <Link
//               href={"#about"}
//               className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
//             >
//               About
//             </Link>
//             <Link
//               href={"#skill"}
//               className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
//             >
//               Skills
//             </Link>
//             <Link
//               href={"#project"}
//               className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
//             >
//               Projects
//             </Link>
//             <Link
//               href={"#Contact"}
//               className="mr-5 hover:text-blue-600 hover:bg-white rounded-3xl px-2"
//             >
//               Contact
//             </Link>
//           </nav>
//           <a href="/assests/cv/myCv.pdf">
//             <button
//               className="inline-flex items-center
//             p-10 bg-slate-900 border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-slate-900
//             hover:text-blue-blue rounded-3xl text-base mt-4 md:mt-0"
//             >
//               Resume
//               <AiOutlineCloudDownload className="text-xl ml-2" />
//             </button>
//           </a>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar; */}
