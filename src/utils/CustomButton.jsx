/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CustomButton = ({ next, previous , ...rest}) => {
    console.log(rest , rest.carouselState.currentSlide);
    const { currentSlide, totalItems, slidesToShow } = rest.carouselState;
    const isAtStart = currentSlide === 0;
    const isAtEnd = currentSlide >= totalItems - slidesToShow;
    return (
      <div className="absolute top-1/2 w-full flex justify-between  transform -translate-y-1/2 z-10 ">
        <button
          className={` p-3 rounded-full  ${isAtStart ? "bg-[#E4E4E4DB] text-black" : "bg-[#ECA76E] text-white"}  `}
          onClick={previous}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className={`text-white p-3 rounded-full  ${isAtEnd ? "bg-[#E4E4E4DB]" : "bg-[#ECA76E]"}`}
          onClick={next}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    );
  };

export default CustomButton;