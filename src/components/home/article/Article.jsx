import { articles } from "../../../assets/dummyData";

const Article = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-10 p-18 bg-[#FCEFE4]">
      <div className="relative">
        <div className="">
          <img src="blog.png" alt="" />
        </div>
        <p className="absolute top-5 left-25 flex flex-col items-center justify-center">
          <p className="text-[#B68053] font-display3 text-[24px] font-medium">Our Blog</p>
          <p className=" text-[42px] font-semibold">Recent Articles</p>
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-10">
        {articles.map((item) => (
          <div
            key={item.id}
            className="w-[310px]   flex flex-col gap-3"
          >
            <div className="w-full h-[240px]">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between text-[14px] font-light">
              <p>{item.date}</p>
              <p>By: {item.creator}</p>
            </div>
            <div className="text-[18px] font-semibold">
              <p>{item.desc}</p>
            </div>
            <button className="bg-transparent hover:bg-[#ECA76E] text-black hover:text-white border border-black hover:border-[#ECA76E] rounded-md font-semibold px-5 py-1 w-fit">
              View All
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
