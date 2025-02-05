const AboutLeft = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 sm:gap-6">
        <div className="flex flex-col gap-20 sm:gap-6">
          <div className="relative">
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-[#ECA76E]"></div>
            <div className="w-[230px] h-[180px] md:w-[290px] md:h-[220px] absolute top-3 left-3">
              <img src="about-1.jpeg" alt="" className="w-full h-full object-cover  " />
            </div>
          </div>
          <div className="relative">
            <div className="w-[230px] h-[180px] md:w-[290px] md:h-[220px]">
              <img src="about-2.jpeg" alt="" className="w-full h-full object-cover  " />
            </div>
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-[#ECA76E] absolute -right-3 -bottom-3 -z-10"></div>
          </div>
        </div>
        <div className="relative">
          <div className="w-[150px] h-[300px] md:w-[200px] md:h-[400px] bg-[#ECA76E] absolute -top-3 -right-3 -z-10"></div>
          <div className="w-[230px] h-[360px] md:w-[290px] md:h-[460px]">
            <img src="about-3.jpeg" alt="" className="w-full h-full object-cover  " />
          </div>
        </div>
      </div>
  )
}

export default AboutLeft