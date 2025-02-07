import { FaPlay, FaPause } from "react-icons/fa";
import { useRef, useState } from "react";

const Promo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          videoRef.current.load();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  return (
    <div className=" bg-[url(promo-bg.jpeg)] bg-no-repeat bg-cover bg-center ">
        <div className="bg-black/60 flex flex-col md:flex-row items-center justify-between w-full h-full gap-10  p-18 ">
        <div className="w-full sm:w-1/2 flex flex-col gap-10">
            <p className="text-[#ECA76E] text-base font-medium">PROMO VIDEO</p>
            <p className="text-white text-3xl font-semibold font-display3">Ensuring a safe experience from design to installation</p>
            <p className="text-white/70 text-[15px] font-display3">Nurani Interior possesses vast experience in the Interior Design industry having a large technical resource of Interior Designers, Architects, Electrical & Civil Engineers. We are also privileged to develop some significant interior projects since 2010.</p>
            <button className="bg-[#B68053] text-white px-4 py-2 rounded-md flex items-center gap-3 w-fit">MORE VIDEOS <FaPlay />
            </button>
        </div>
        <div className="relative sm:w-[530px] h-[320px] ">
            <video ref={videoRef} src="promo.mp4" poster="video.jpeg"  className="w-full h-full object-cover rounded-md"></video>
            <button
        onClick={togglePlayPause}
        className="absolute top-1/2 left-1/2 transform -translate-1/2 border border-white  text-white p-2 rounded-full  transition-all ease-in-out duration-300"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
        </div>
        </div>
       
    </div>
  )
}

export default Promo