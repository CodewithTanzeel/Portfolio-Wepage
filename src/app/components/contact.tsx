import React from "react";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-black body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">
            <iframe id="iframe"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.133649852127!2d-71.09673492497225!3d42.360094935101074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370aaf51a6a87%3A0xd0e08ea5b308203c!2sMassachusetts%20Institute%20of%20Technology!5e1!3m2!1sen!2s!4v1725122380875!5m2!1sen!2s"
            />
            <div className="bg-white rounded-2xl relative flex flex-wrap py-6  shadow-md ">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  <span className="font-extrabold text-black">
                    Quantum Verse Inc.
                  </span>
                  1234 Innovation Drive Suite 567 Tech City, CA 94016 United
                  States
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-500 leading-relaxed">
                  Tanzeelofficial@outlook.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">0333XXXXXXX</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0  p-10 rounded-lg opacity-95">
            <form action="https://formspree.io/f/mgvwdgpe" method="POST">
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Contact
              </h2>
              <p className="leading-relaxed mb-5 text-black">
                Business Inquiries
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={"Enter Your message"}
                />
              </div>
              <div className="flex justify-center">
                <button className="text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-blue-500 rounded-full text-lg transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
