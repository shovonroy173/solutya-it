import { HiArrowRight } from "react-icons/hi2";
import { services } from "../../../assets/dummyData";

const Services = () => {
  return (
    <div className="min-h-screen bg-[url(services-bg.jpeg)] bg-no-repeat bg-cover bg-center ">
      <div className="bg-white/80 w-full h-full flex items-center justify-center  flex-wrap gap-5 p-18 ">
        <div className=" flex flex-col items-start gap-4 p-10 w-[420px]">
          <p className="text-[40px] font-semibold ">
            <p>Services</p>
            Provided By Us
          </p>
          <p className="text-black/60 text-[18px]">
            There are many variations of passages of Lorem Ipsum{" "}
          </p>
          <button className="bg-[#ECA76E] py-3 px-4 sm:px-7 text-white text-base font-semibold">
            Learn More
          </button>
        </div>
        <div className="bg-[url(about-1.jpeg)] bg-no-repeat bg-cover bg-center rounded-lg  w-[420px]">
          <div className="bg-black/70  h-full flex flex-col items-center gap-4 p-10  sm:w-[420px] rounded-lg">
            <img src="service-1.png" alt="" />
            <p className="font-semibold text-[28px] text-white">Architecture</p>
            <p className="font-normal text-base text-white text-center leading-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in so{" "}
            </p>
            <button className=" text-[#ECA76E] text-base font-medium flex items-center gap-2">
              Learn More
              <HiArrowRight />
            </button>
          </div>
        </div>
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white flex flex-col items-center gap-4 p-10 w-[420px] rounded-lg"
          >
            <img src={service.img} alt="" />
            <p className="font-semibold text-[28px] text-black">
              {service.title}
            </p>
            <p className="font-normal text-base text-black text-center leading-8">
              {service.desc}{" "}
            </p>
            <button className=" text-[#ECA76E] text-base font-medium flex items-center gap-2">
              Learn More
              <HiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
