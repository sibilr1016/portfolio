import { FaGithub } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

const Projects = () => {
  return (
    <div className="mt-23 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold mb-5 text-[#fafafa]">
        My{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <p className="text-lg text-gray-600 mb-14">
        Here are some of the projects I've worked on. Each one represents
        different challenges and learning experiences.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col w-full max-w-xs border-2 bg-[#0000004d] rounded-2xl pb-4">
            <div className="rounded-2xl">
              <img src="12.png" className="rounded-t-2xl" alt="" />
            </div>
            <div className="flex flex-col p-6">
              <h4 className="text-2xl font-medium mb-2">Portfolio</h4>
              <p className="font-normal text-sm text-gray-400 mb-6">
                A responsive React portfolio showcasing my projects, built with
                Tailwind CSS and integrated with Web3Forms for instant contact
                submissions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-800 font-medium mb-4">
                <span className="bg-stone-50 px-2 py-1  rounded-xl">React</span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">
                  Tailwind CSS
                </span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">
                  Web3Forms
                </span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">
                  React Icons
                </span>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 bg-[#282727] p-2 rounded-lg px-2 py-1">
                  <FaGithub />
                  <span>Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col w-full max-w-xs border-2 bg-[#0000004d] rounded-2xl pb-4">
            <div className="rounded-2xl">
              <img src="13.png" className="rounded-t-2xl" alt="" />
            </div>
            <div className="flex flex-col p-6">
              <h4 className="text-2xl font-medium mb-2">Project 2</h4>
              <p className="font-normal text-sm text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                esse natus molestiae libero aperiam neque quae magnam, qui
                earum? Sunt voluptas natus.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-800 font-medium mb-4">
                <span className="bg-stone-50 px-2 py-1  rounded-xl">React</span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">Redux</span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">
                  Node.js
                </span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">
                  Express
                </span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">
                  MongoDB
                </span>
                <span className="bg-stone-50 px-2 py-1  rounded-xl">
                  Razorpay
                </span>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 bg-[#282727] p-2 rounded-lg px-2 py-1">
                  <FaGithub />
                  <span>Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <button className=" flex gap-2 px-6  text-blue-500 text-sm font-medium border w-full rounded-lg py-2">
          <TbBrandGithub size={24} />
          <span>See More on GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
