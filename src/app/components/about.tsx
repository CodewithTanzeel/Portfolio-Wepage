import Image from "next/image";
import React from "react";
import pic from "../../../public/assets/picture/pic.png";
//about function
const About = () => {
  return (
    <div id="about">
      <section className="text-red-100 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center hover-effect rounded-full mx-auto w-[400px] h-[400px]"
              alt="Author"
              src={pic}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-50 hover:text-blue-500 ">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              I am a passionate full-stack generative AI engineer with expertise
              in front-end development, including HTML, CSS, and JavaScript. My
              work focuses on crafting innovative solutions using Next.js and
              TypeScript. Dedicated to continuous learning and growth, I strive
              to deliver cutting-edge technology and exceptional user
              experiences.
            </p>
            <p className="mb-5 leading-relaxed">
              With a strong foundation as a full-stack generative AI developer
              and a deep understanding of modern technologies, I am committed to
              creating innovative solutions and applications. My projects
              reflect a blend of creativity and technical expertise, ensuring
              high-quality outcomes that meet both functional and aesthetic
              goals.
            </p>
            <div className="flex justify-center">
              <a href={"/assests/cv/myCv.pdf"}>
                <button
                  className="inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-white
                hover:text-blue-500 rounded-full text-lg"
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
