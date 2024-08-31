import Image from "next/image";
import Link from "next/link";
import React from "react";
import fbl from "./../../../public/assets/projects/fbl.png"
import cyber from "./../../../public/assets/projects/cyber.png"

const Project = () => {
  return (
    <div id="project">
      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 p-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-50 hover:text-blue-500 ">
              Featured Work
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/*CyberFiction*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
              <div className="flex relative ">
                <Image
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl "
                  src={cyber}
                  width={50}
                  height={50}
                  alt="facebook"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-2xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Cyber-web
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CyberFictionWebSite
                  </h1>
                  <p className="leading-relaxed line-clamp-2 pb-3">
                    Cyberfiction is an innovative platform that merges storytelling with technology to create immersive digital experiences. The project features a sleek, minimalist design that draws users into a futuristic narrative world. Utilizing modern web technologies such as **HTML**, **CSS**, and **JavaScript**, Cyberfiction showcases dynamic content through interactive elements and smooth animations. The site is fully responsive, ensuring an optimal experience across devices. This project highlights my ability to blend creative storytelling with technical expertise, delivering a unique and engaging web experience.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://codewithtanzeel.github.io/CYBERFICTION/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* FaceBook*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer ">
              <div className="flex relative ">
                <Image
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl "
                  src={fbl}
                  width={50}
                  height={50}
                  alt="facebook"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-2xl">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Facebook-Login
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Facebook-Signup
                  </h1>
                  <p className="leading-relaxed line-clamp-2 pb-3">
                    This project is a Facebook login clone designed to replicate the look and functionality of the popular social media login interface. It features a user-friendly form for authentication, responsive design, and secure data handling. Built with Next.js, TypeScript, and Tailwind CSS, this clone demonstrates robust front-end development skills and attention to detail in UI/UX design.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://facebook-sign-9b1mbmy0o-tanzeelahmads-projects.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

