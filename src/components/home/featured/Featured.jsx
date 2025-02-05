const Featured = () => {
  return (
    <div className="flex flex-col p-18 gap-10 min-h-fit ">
      <p className="text-2xl md:text-[40px] font-bold font-display2 text-center">Our Featured Project</p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row w-full h-fit md:h-[570px] gap-5 ">
          <div className="w-full h-full">
            <img
              src="pro-1.jpeg"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col w-full h-full gap-5 ">
            <div className="w-full h-1/2">
              <img
                src="pro-2.jpeg"
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-1/2">
              <img
                src="pro-3.jpeg"
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full h-[270px]">
          <div className="w-full md:w-1/2 h-full">
            <img
              src="pro-4.jpeg"
              alt=""
              className="rounded-lg w-full h-full object-cover "
            />
          </div>
          <div className="w-full md:w-1/2 h-full">
            <img
              src="pro-5.png"
              alt=""
              className="rounded-lg w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
