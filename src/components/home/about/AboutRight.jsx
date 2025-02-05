const AboutRight = () => {
  return (
    <div className="w-full lg:w-[40%] flex flex-col gap-6 text-center lg:text-left">
        <p className="text-[#B68053] text-[18px] font-medium">About Us</p>
        <p className="font-semibold text-3xl md:text-5xl leading-tight">
          We’re Experienced in This Field
        </p>
        <p className="font-normal text-black/60 text-sm md:text-base">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          <div>
            <p className="text-3xl text-[#ECA76E] font-semibold">13+</p>
            <p className="text-sm font-semibold">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl text-[#ECA76E] font-semibold">267+</p>
            <p className="text-sm font-semibold">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl text-[#ECA76E] font-semibold">40+</p>
            <p className="text-sm font-semibold">Best Partners</p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-[#ECA76E] text-white rounded-lg font-semibold px-6 py-3 w-fit">
            Read More
          </button>
        </div>
      </div>
  )
}

export default AboutRight