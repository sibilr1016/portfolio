import { CiGlobe } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { FiDatabase, FiServer } from "react-icons/fi";
import { MdCode } from "react-icons/md";

const About = () => {
  return (
    <div className="mt-23 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold mb-5 text-[#fafafa]">
        About{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <p className="text-lg text-gray-400 mb-14">
        I'm a passionate MERN stack developer with a strong foundation in
        building scalable web applications. With expertise in both frontend and
        backend technologies, I create seamless digital experiences that solve
        real-world problems.
      </p>
      <h2 className="text-2xl self-start font-bold mb-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        My Journey
      </h2>
      <p className="text-md text-left text-gray-400 mb-14">
        My development journey began when I built my first website using HTML
        and CSS. Since then, I've consistently expanded my skill set to include
        modern frameworks and tools like React, Node.js, and MongoDB.
        <br />
        <br />
        I've had the opportunity to work on diverse projects ranging from
        e-commerce platforms to social networking applications, honing my
        problem-solving abilities and technical expertise along the way.
        <br />
        <br />
        What drives me is the blend of creativity and logic that web development
        offers. I'm constantly learning new technologies and approaches to stay
        at the forefront of this ever-evolving field.
      </p>
      <h2 className="text-2xl self-start font-bold mb-5 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        My Approach
      </h2>
      <p className="text-md text-left text-gray-400 mb-4">
        I believe in building applications that are not only functionally sound
        but also provide exceptional user experiences. My development process
        emphasizes:
      </p>

      <ul className="list-disc space-y-2 text-md ml-7 text-left text-gray-400 mb-14">
        <li>Clean, maintainable code following best practices</li>
        <li>Responsive design that works seamlessly across all devices</li>
        <li>Performance optimization for fast-loading applications</li>
        <li>Scalable architecture that can grow with business needs</li>
        <li>Secure development practices to protect user data</li>
      </ul>
      <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      {/* <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-full min-w-xs bg-[#0000004d] rounded-2xl p-4">
          <div className="self-start h-14 w-14 flex justify-center items-center rounded-xl">
            <CiGlobe size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-medium mb-4">Frontend</h4>
          <ul className="font-light text-gray-400 space-y-2 mb-2">
            <li>React.js</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>RTK Query</li>
            <li>React Hot Toast</li>
            <li>React Toastify</li>
            <li>Web3Forms</li>
            <li>Tailwind CSS</li>
            <li>React Bootstrap</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>
        <div className="flex flex-col w-full min-w-xs bg-[#0000004d] rounded-2xl p-4">
          <div className=" h-14 w-14 flex justify-center items-center">
            <FiServer size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-medium mb-4">Backend</h4>
          <ul className="font-light text-gray-400 space-y-2 mb-2">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JWT</li>
            <li>RESTful APIs</li>
            <li>SendGrid</li>
            <li>Razorpay API</li>
          </ul>
        </div>
        <div className="flex flex-col w-full min-w-xs bg-[#0000004d] rounded-2xl p-4">
          <div className=" h-14 w-14 flex justify-center items-center">
            <FiDatabase size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-medium mb-4">Database</h4>
          <ul className="font-light text-gray-400 space-y-2 mb-2">
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className="flex flex-col w-full min-w-xs bg-[#0000004d] rounded-2xl p-4">
          <div className=" h-14 w-14 flex justify-center items-center">
            <FaTools size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-medium mb-4">Tools</h4>
          <ul className="font-light text-gray-400 space-y-2 mb-2">
            <li>Git</li>
            <li>Github</li>
            <li>Postman</li>
          </ul>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="flex flex-col min-w-xs bg-[#0000004d] rounded-2xl p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-[#00000066]">
          <div className="h-14 w-14 flex justify-center items-center rounded-xl mb-3">
            <CiGlobe size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-semibold mb-4 text-white">Frontend</h4>
          <ul className="font-light text-gray-300 space-y-2">
            <li>React.js</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>RTK Query</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>React Hot Toast</li>
            <li>React Toastify</li>
            <li>React Bootstrap</li>
            <li>JavaScript (ES6+)</li>
            <li>Web3Forms</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="flex flex-col bg-[#0000004d] rounded-2xl p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-[#00000066]">
          <div className="h-14 w-14 flex justify-center items-center rounded-xl mb-3">
            <FiServer size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-semibold mb-4 text-white">Backend</h4>
          <ul className="font-light text-gray-300 space-y-2">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JWT</li>
            <li>RESTful APIs</li>
            <li>SendGrid (Email API)</li>
            <li>Razorpay API (Payments)</li>
          </ul>
        </div>

        {/* Database */}
        <div className="flex flex-col bg-[#0000004d] rounded-2xl p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-[#00000066]">
          <div className="h-14 w-14 flex justify-center items-center rounded-xl mb-3">
            <FiDatabase size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-semibold mb-4 text-white">Database</h4>
          <ul className="font-light text-gray-300 space-y-2">
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="flex flex-col bg-[#0000004d] rounded-2xl p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-[#00000066]">
          <div className="h-14 w-14 flex justify-center items-center rounded-xl mb-3">
            <FaTools size={35} className="text-blue-400" />
          </div>
          <h4 className="text-xl font-semibold mb-4 text-white">Tools</h4>
          <ul className="font-light text-gray-300 space-y-2">
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
