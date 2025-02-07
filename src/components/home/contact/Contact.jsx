import { MdPhone, MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-18 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="w-full sm:w-1/2 flex flex-col gap-10">
        <p className="text-4xl font-semibold">
          Get In <span className="text-[#ECA76E]">Touch</span>{" "}
        </p>
        <div className="flex flex-wrap gap-5">
          <div className="py-12 px-6  shadow-contact flex flex-col w-full sm:w-[250px]">
            <p className="text-2xl font-bold text-[#ECA76E] font-display4 mb-2">
              Contact Us
            </p>
            <p className="flex items-center gap-1">
              <MdPhone /> +8801344738600
            </p>
            <p className="flex items-center gap-1">
              <MdEmail />
              Helle@Planmarke.com
            </p>
          </div>
          <div className="py-12 px-6 flex flex-col w-full sm:w-[250px]  shadow-contact">
            <p className="text-2xl font-bold text-[#ECA76E] font-display4 mb-2">
              Our Hours
            </p>
            <p>We Are Open SAT- THUR </p>
            <p>08:30 - 05:00(GMT 6+)</p>
          </div>
          <div className="py-12 px-6 flex flex-col w-full sm:w-[250px]  shadow-contact">
            <p className="text-2xl font-bold text-[#ECA76E] font-display4 mb-2">
              Location
            </p>
            <p>89/7 Gopibag, Dhaka</p>
            <p>1203, Bangladesh</p>
          </div>
          <div className="py-12 px-6 flex flex-col w-full sm:w-[250px]  shadow-contact">
            <p className="text-2xl font-bold text-[#ECA76E] font-display4 mb-2">
              Social
            </p>
            <div className="flex gap-4">
            <div className="p-2 bg-[#EFEFEF] rounded-full">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-[#EFEFEF] rounded-full">
              <FaTwitter />
            </div>
            <div className="p-2 bg-[#EFEFEF] rounded-full">
              <FaLinkedinIn />
            </div>
            <div className="p-2 bg-[#EFEFEF] rounded-full">
              <FaInstagram />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white bg-black flex flex-col px-8 py-12 gap-10 rounded-xl sm:w-[600px]">
        <p className="font-medium text-4xl">
          Got Ideas/We’ve got The Skills Let’s Work Together.
        </p>
        <p className="text-[14px] text-white/70">Tell Us More About Yourself</p>
        <input
          type="text"
          name=""
          id=""
          className="border-b border-white outline-none placeholder:text-white"
          placeholder="Your full  Name"
        />
        <input
          type="text"
          name=""
          id=""
          className="border-b border-white outline-none placeholder:text-white"
          placeholder="Your Email Id"
        />

        <input
          type="text"
          name=""
          id=""
          className="border-b border-white outline-none placeholder:text-white"
          placeholder="Tell Us About You"
        />

        <button className="bg-[#ECA76E] px-20 py-2 rounded-xl w-4/5 mx-auto mt-20">
          Lets Get Started
        </button>
      </div>
    </div>
  );
};

export default Contact;
