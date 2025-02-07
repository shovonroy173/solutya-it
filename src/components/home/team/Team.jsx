import { experts } from "../../../assets/dummyData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Team = () => {
  return (
    <div className="p-18 flex flex-col items-center gap-10">
      <div className="relative">
        <div className="">
          <img src="team.png" alt="" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <p className="text-[#B68053] font-display3 text-[24px] font-medium">
            Our Team
          </p>
          <p className="text-base sm:text-[42px] font-semibold text-nowrap text-center">
            Meet Our Experts
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-11 flex-wrap">
        {experts.map((item) => (
          <div key={item.id} className="flex flex-col gap-5 items-center group">
            <div className="relative w-[300px] h-[400px]">
              <div className="w-full h-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>

              <div className="w-[280px] h-[380px] bg-[#B68053] rounded-md absolute -bottom-3 -left-3 -z-10"></div>
              <div className="hidden group-hover:block transition-all ease-in-out duration-300">
                <div className="absolute  bottom-5 flex items-center text-xl justify-between w-full px-5">
                  <div className="bg-white hover:bg-[#B68053] text-black hover:text-white rounded-full p-2 transition-all ease-in-out duration-300">
                    <FaFacebookF />
                  </div>
                  <div className="bg-white hover:bg-[#B68053] text-black hover:text-white rounded-full p-2 transition-all ease-in-out duration-300">
                    <FaTwitter />
                  </div>
                  <div className="bg-white hover:bg-[#B68053] text-black hover:text-white rounded-full p-2 transition-all ease-in-out duration-300">
                    <IoMdShare />
                  </div>
                  <div className="bg-white hover:bg-[#B68053] text-black hover:text-white rounded-full p-2 transition-all ease-in-out duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="bg-white hover:bg-[#B68053] text-black hover:text-white rounded-full p-2">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[24px] font-semibold">{item.name}</p>
              <p className="text-[14px]">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="px-8 py-2 bg-[#B68053] rounded-md w-fit text-lg font-medium text-white">View All</button>
    </div>
  );
};

export default Team;
