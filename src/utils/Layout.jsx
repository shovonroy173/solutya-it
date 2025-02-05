import Navbar from "../components/navbar/Navbar"

/* eslint-disable react/prop-types */
const Layout = ({children}) => {
  return (
    <div className="mx-auto w-full h-screen font-display">
      <Navbar/>
      <div className=" min-h-screen ">{children}</div>
    </div>
  )
}

export default Layout