import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { navLinks } from "../../assets/dummyData";
import { Link } from "react-router-dom";
const ResponsiveNavbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="block md:hidden transition-all ease-in-out duration-300">
        <div className="relative w-6 h-6" onClick={() => setOpen(!open)}>
          <IoMdClose
            className={`absolute text-xl transition-all  ease-in-outduration-300 ${
              open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
            }`}
          />
          <FaBarsStaggered
            className={`absolute text-xl transition-all  ease-in-out duration-300 ${
              open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
            }`}
          />
        </div>
          <div
            className={`bg-white absolute  top-25 left-0 w-full transition-all ease-in-out duration-300 ${
              open ? "h-fit opacity-100" : "h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col justify-between gap-10  transition-all ease-in-out duration-300 px-14 pb-10">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="text-base font-medium hover:text-[#B68053] flex flex-col gap-2 "
                >
                  <Link to={link.url}>{link.title}</Link>
                </div>
              ))}
              <div className="py-1 px-3 border border-[#ECA76E] rounded-md text-base font-semibold text-center  transition-all ease-in-out duration-300">
        <Link to="/contact-us">Contact Us</Link>
      </div>
            </div>
          </div>
      </div>
  )
}

export default ResponsiveNavbar