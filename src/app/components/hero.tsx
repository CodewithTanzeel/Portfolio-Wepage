"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import pic from "./../../../public/assets/picture/pic.png"

const Hero = () => {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-red-50 ">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Ai Developer",
                  "UI/UX Designer",
                  "Physicist",
                  
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[16rem] h-[2px] bg-cyan-500 hover:bg-slate-500"></div>
          <p className="mb-8 leading-relaxed text-red-100">
            Passionate about merging creativity with technology, I craft innovative digital solutions that elevate user experiences. My work reflects a dedication to quality and a commitment to staying at the forefront of web development trends. Explore my journey in tech.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-blue-500 rounded-full text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full mx-auto w-[18rem] "
            alt="hero"
            width={500}
            height={500}
            src={pic}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

