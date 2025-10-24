import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb31eba6-a809-4cf8-a6c4-9ccc84d56823");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="mt-23 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-3xl font-bold mb-5 text-[#fafafa]">
        Get In{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Touch
        </span>
      </h2>
      <p className="text-lg text-gray-600 mb-14">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col md:flex-row gap-8 text-left">
          <div className="flex flex-col items-center justify-center w-full min-w-xs md:min-w-[200px] bg-[#0000004d] rounded-2xl p-4">
            <div className="bg-blue-50 mb-3 h-14 w-14 flex justify-center items-center  rounded-full ">
              <MdOutlineMailOutline size={30} className="text-blue-400" />
            </div>
            <p className="font-bold">Email</p>
            <p className="font-medium">sibilr1016@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full min-w-xs md:min-w-[200px] bg-[#0000004d] rounded-2xl p-4">
            <div className="bg-blue-50 mb-3 h-14 w-14 flex justify-center items-center  rounded-full ">
              <FiPhone size={30} className="text-blue-400" />
            </div>
            <p className="font-bold">Phone</p>
            <p className="font-medium">+91 9497898614</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full min-w-xs md:min-w-[200px] bg-[#0000004d] rounded-2xl p-4">
            <div className="bg-blue-50 mb-3 h-14 w-14 flex justify-center items-center  rounded-full ">
              <CiLocationOn size={30} className="text-blue-400" />
            </div>
            <p className="font-bold">Location</p>
            <p className="font-medium">Trivandrum, Kerala</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-xs md:max-w-3xl items-center justify-center bg-[#0000004d] rounded-2xl p-4">
        <form action="" className="w-full" onSubmit={onSubmit}>
          <div className="flex flex-col text-left">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-1 flex-col text-left">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-[#121212] px-2 py-1 border border-gray-500/50 rounded-md mt-2"
                  />
                </div>
                <div className="flex flex-1 flex-col text-left">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="bg-[#121212] px-2 py-1 border border-gray-500/50 rounded-md mt-2"
                  />
                </div>
              </div>
            </div>
            <label htmlFor="">Subject</label>
            <input
              name="subject"
              required
              placeholder="Subject"
              className="bg-[#121212] px-2 py-1 border border-gray-500/50 rounded-md mt-2"
            />
            <label htmlFor="" className="mt-4">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Your message"
              rows={5}
              className="bg-[#121212] px-2 py-1 border border-gray-500/50 rounded-md mt-2"
            />
          </div>
          <button
            type="submit"
            className="flex mt-6 items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-medium bg-blue-400/80 mb-4"
          >
            <BsSend />
            <span>Send Message</span>
          </button>
        </form>
        {result && (
          <p className="text-sm text-gray-400 text-center mt-2">{result}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;

// bb31eba6-a809-4cf8-a6c4-9ccc84d56823
