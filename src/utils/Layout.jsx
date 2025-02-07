import Navbar from "../components/navbar/Navbar"

/* eslint-disable react/prop-types */
const Layout = ({children}) => {
  return (
    <div className="mx-auto w-full h-screen font-display overflow-y-auto ">

<div className="sticky top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className=" min-h-screen ">{children}</div>
    </div>
  )
}

export default Layout