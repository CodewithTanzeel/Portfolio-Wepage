import Image from "next/image";
import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import html from "./../../../public/assets/picture/html.png";
import css from "./../../../public/assets/picture/css.png";
import javasc from "./../../../public/assets/picture/javasc.png";
import next from "./../../../public/assets/picture/next.png";
import ts from "./../../../public/assets/picture/ts.png";
import boot from "./../../../public/assets/picture/boot.png";

const Skill = () => {
  return (
    <div id="skill">
      <section className="text-red-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-amber-400 tracking-widest font-medium title-font mb-1">
              CAPABILITIES
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-50 pb-4">
              Expertise Overview
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* HTML */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <Image
                    className="hover-effect"
                    src={html}
                    alt="HTML"
                    width={60}
                    height={50}
                  />

                  <h2 className="text-red-50 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-amber-400 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-amber-400 text-right">100%</p>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <Image
                    className="hover-effect"
                    src={css}
                    alt="CascadingStyle"
                    width={60}
                    height={30}
                  />

                  <h2 className="text-red-50 text-lg title-font font-medium ml-4">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-amber-400 h-1 rounded-xl w-[65%]"></div>
                  </div>
                  <p className="font-bold text-amber-400 text-right">65%</p>
                </div>
              </div>
            </div>
            {/* JavaScript */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <Image
                    src={javasc}
                    className="rounded-md hover-effect"
                    alt="Javascript"
                    width={50}
                    height={50}
                  />

                  <h2 className="text-red-50 text-lg title-font font-medium pl-2 ml-4">
                    JavaScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-amber-400 h-1 rounded-xl w-[92%]"></div>
                  </div>
                  <p className="font-bold text-amber-400 text-right">92%</p>
                </div>
              </div>
            </div>
            {/* TypeScript */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <Image
                    className="hover-effect"
                    src={ts}
                    alt="TypeScript"
                    width={50}
                    height={50}
                  />

                  <h2 className="text-red-50 text-lg title-font font-medium ml-4">
                    TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-amber-400 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-amber-400 text-right">95%</p>
                </div>
              </div>
            </div>
            {/* NEXT.JS */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <Image
                    className="hover-effect rounded-3xl bg-white "
                    src={next}
                    alt="React"
                    width={50}
                    height={50}
                  />

                  <h2 className="text-red-50 text-lg title-font font-medium ml-4">
                    Next.Js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-amber-400 h-1 rounded-xl w-[89%]"></div>
                  </div>
                  <p className="font-bold text-amber-400 text-right">89%</p>
                </div>
              </div>
            </div>
            {/* Bootstrap */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <Image
                    src={boot}
                    className="bg-white rounded-2xl hover-effect"
                    alt="Bootstrap"
                    width={50}
                    height={50}
                  />

                  <h2 className="text-red-50 text-lg title-font font-medium ml-4">
                    Bootstrap
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-amber-400 h-1 rounded-xl w-[55%]"></div>
                  </div>
                  <p className="font-bold text-amber-400 text-right">55%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
