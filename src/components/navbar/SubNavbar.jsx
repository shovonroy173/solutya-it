import { navLinks } from "../../assets/dummyData";
import { Link } from 'react-router-dom'

const NavbarLinks = () => {
  return (

        <div className="hidden md:flex justify-between gap-10  transition-all ease-in-out duration-300">
        {navLinks.map((link) => (
          <div
            key={link.id}
            className="text-base font-medium hover:text-[#B68053] flex flex-col gap-2 "
          >
            <Link to={link.url}>{link.title}</Link>
            <div className="bg-[#B68053] h-0.5"></div>
          </div>
        ))}
      </div>

  )
}

export default NavbarLinks