import { CiGlobe } from "react-icons/ci";
import { FiServer } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { MdCode } from "react-icons/md";

const Home = () => {
  return (
    <div className="mt-7 flex flex-col items-center justify-center text-center">
      <div className="relative w-24 h-24 mt-8 mb-8">
        {/* Glow background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-40" />

        {/* Main circle with icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
          <MdCode size={48} className="text-purple-200" />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-[#fafafa]">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Sibi LR
        </span>
      </h1>

      <h2 className="text-2xl text-gray-300 mb-7">
        Building dynamic, scalable, and user-focused web experiences.
      </h2>
      <p className="text-lg text-gray-400 mb-9">
        I develop full-stack web applications using MongoDB, Express, React, and
        Node.js — delivering responsive, user-focused experiences built on
        clean, maintainable code.
      </p>
      <div className="flex space-x-8 mb-12">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-600/10 h-14 w-14 flex justify-center items-center  rounded-xl border border-blue-400/50 ">
            <FiServer size={25} className="text-blue-400" />
          </div>
          <p className="text-sm text-gray-100 mt-2">Backend</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-purple-600/5 h-14 w-14 flex justify-center items-center  rounded-xl border border-purple-400/50 ">
            <IoIosCode size={30} className="text-purple-400" />
          </div>
          <p className="text-sm text-gray-100 mt-2">Frontend</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-600/5 h-14 w-14 flex justify-center items-center rounded-xl border border-blue-400/50 ">
            <CiGlobe size={25} className="text-blue-400" />
          </div>
          <p className="text-sm text-gray-100 mt-2">Full Stack</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <button className="px-8 py-3 rounded-lg cursor-pointer text-sm font-medium bg-blue-400/80 md:mb-0 mb-2">
          <a
            href="https://drive.google.com/file/d/14QsvFyGBz5bzKQyP2OTCP2bEdRjVu-6K/view?usp=drive_link"
            // https://drive.google.com/file/d/14QsvFyGBz5bzKQyP2OTCP2bEdRjVu-6K/view?usp=drive_link
            target="_blank"
            rel="noopener noreferrer"
            // className="px-8 py-3 rounded-lg cursor-pointer text-sm font-medium bg-blue-400/80 md:mb-0 mb-2 hover:bg-blue-500 transition-all text-white"
          >
            Download Resume
          </a>
        </button>
        <button className="text-blue-500 cursor-pointer px-8 text-sm font-medium border rounded-lg py-3">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer"
          >
            Connect Me
          </button>
        </button>
      </div>
    </div>
  );
};

export default Home;
