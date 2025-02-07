import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-5">
      <div className="flex flex-wrap items-center justify-between px-18 py-10 gap-6">
        <div className="w-full sm:w-1/4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <img src="logo-dark.png" alt="Logo" />
          </h2>
          <p className="text-base mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words of Latin.
          </p>
          <p className="text-lg font-semibold mt-4">Follow Us:</p>
          <div className="flex gap-3 mt-2">
            <div className="bg-white p-2 rounded-full text-black cursor-pointer ">
              <FaFacebookF />
            </div>
            <div className="bg-white p-2 rounded-full text-black cursor-pointer ">
              <FaTwitter />
            </div>
            <div className="bg-white p-2 rounded-full text-black cursor-pointer ">
              <FaLinkedinIn />
            </div>
            <div className="bg-white p-2 rounded-full text-black cursor-pointer ">
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="h-32 w-[1px] bg-white hidden sm:block"></div>

        <div>
          <h3 className="text-lg font-semibold">Categories</h3>
          <ul className="mt-3 text-base space-y-2">
            <li className="flex">
              <BsDot />
              About Us
            </li>
            <li className="flex">
              <BsDot />
              Services
            </li>
            <li className="flex">
              <BsDot />
              Portfolio
            </li>
            <li className="flex">
              <BsDot />
              Blogs
            </li>
            <li className="flex">
              <BsDot />
              Contact Us
            </li>
          </ul>
        </div>

        <div className="h-32 w-[1px] bg-white hidden sm:block"></div>

        <div>
          <h3 className="text-lg font-semibold">Our Services</h3>
          <ul className="mt-3 text-base space-y-2">
            <li className="flex">
              <BsDot />
              Interior Design
            </li>
            <li className="flex">
              <BsDot />
              Home Remodeling
            </li>
            <li className="flex">
              <BsDot />
              Architecture Design
            </li>
            <li className="flex">
              <BsDot />
              Office Renovation
            </li>
            <li className="flex">
              <BsDot />
              Perfect Planning
            </li>
          </ul>
        </div>

        <div className="h-32 w-[1px] bg-white hidden sm:block"></div>

        <div className="w-full sm:w-1/4">
          <h3 className="text-lg font-semibold">Office Information</h3>
          <ul className="mt-3 text-base space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              6/5, South Rajarbag, Bashabo, Sabujbag, Dhaka 1214, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhone />
              +8801324738600
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              Helle@Untitedhaven.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white my-6"></div>

      {/* Copyright */}
      <div>
        <p className="text-center text-[12px] font-medium">
          ©Copyright United Haven 2023. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
