import { Link } from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveNavbar";
import NavbarLinks from "./SubNavbar";




const Navbar = () => {

  return (
    <div className="flex justify-between items-center h-26 border-b-2 border-blue-500 px-14 sm:px-20 pt-5 relative">
      <div >
        <img src="logo.png" alt="" className="" />
      </div>
      <NavbarLinks/>
      <div className="py-1 px-3 border border-[#ECA76E] rounded-md text-base font-semibold text-center hidden md:block transition-all ease-in-out duration-300">
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <ResponsiveNavbar/>
    </div>
  );
};

export default Navbar;
