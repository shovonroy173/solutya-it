import { MdOutlineStar } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from "../../../utils/CustomButton";
import { reviews } from "../../../assets/dummyData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Review = () => {
  return (
    <div className="p-18 ">
        <p className="text-4xl font-semibold text-center"><span className="text-[#ECA76E]">What Clients</span>  Are Saying</p>
      <Carousel
        responsive={responsive}
        arrows={false}
        containerClass=" flex items-center gap-5  h-[500px]"
        itemClass="p-2"
        showDots
        customButtonGroup={<CustomButton />}
      >
        {reviews.map((item) => (
          <div
            key={item.id}
            className="py-10  flex flex-col items-center justify-center gap-5 shadow-md"
          >
            <div className="w-[50px] h-[50px] rounded-full">
              <img
                src={item.img}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="text-lg font-medium text-center">{item.name}</p>
            <p className="text-black/90 text-center text-[12px] sm:text-base font-normal w-[80%]">
              {item.desc}
            </p>
            <div className="flex text-[#FFCF26] items-center gap-1 text-xl">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Review;
