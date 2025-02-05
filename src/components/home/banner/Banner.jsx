import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="h-fit bg-[url(banner-bg.jpeg)] bg-no-repeat bg-cover bg-center ">
      <div className="bg-black/70 w-full h-full flex flex-col items-center justify-between gap-10 px-14 py-18">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20 mx-auto">
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <p className="font-bold text-4xl sm:text-7xl text-white leading-15 sm:leading-25 transition-all ease-in-out duration-300">
              Architecture Design Dream Buildings{" "}
            </p>
            <p className="font-normal text-base text-white/80 leading-7 text-wrap w-9/10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which
            </p>
            <div className="flex items-center">
              <button className="bg-[#ECA76E] py-3 px-4 sm:px-7 text-white text-base font-semibold">
                Explore Now
              </button>
              <button className="flex items-center p-1 text-white text-base font-semibold">
                <img src="play.png" alt="" />
                Watch Video
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-[570px] h-[460px]">
          <div className="w-full sm:w-[260px] h-full bg-[#ECA76E] flex justify-end mx-auto absolute sm:right-0 top-0 transition-all ease-in-out duration-300"></div>
            <div className="absolute top-30 sm:top-10 right-10 w-[90%] max-w-[530px]  h-[380px] transition-all ease-in-out duration-300">
              <img src="banner.jpeg" alt="" className="w-full h-auto object-cover aspect-[4/3] transition-all ease-in-out duration-300" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3">
          <div className="bg-[#DCBCA1] px-6 py-3">
            <HiArrowRight className="text-lg" />
          </div>
          <div className="bg-[#DCBCA1] px-6 py-3">
            <HiArrowLeft className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
