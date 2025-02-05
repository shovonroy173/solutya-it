import { HiArrowRight } from "react-icons/hi2"
import { process } from "../../../assets/dummyData"
const Process = () => {
  return (
    <div className="p-18 flex flex-col gap-10 h-fit">
        <p className="text-[40px] font-bold ">Our Work Process</p>
        <div className="flex items-center justify-center flex-wrap gap-10">
            {process.map((service) => (
                      <div
                        key={service.id}
                        className="bg-white flex flex-col items-center gap-4 p-10 w-[420px] rounded-lg shadow-lg"
                      >
                        <img src={service.img} alt="" />
                        <p className="font-semibold text-[28px] text-black">
                          {service.title}
                        </p>
                        <p className="font-normal text-base text-black text-center leading-8">
                          {service.desc}{" "}
                        </p>
                        <button className=" text-[#82631C] text-base font-medium flex items-center gap-2">
                          Learn More
                          <HiArrowRight />
                        </button>
                      </div>
                    ))}
        </div>
    </div>
  )
}

export default Process