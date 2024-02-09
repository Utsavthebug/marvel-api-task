import Navbar from "../components/Navbar";
import ThemeSwitch from "../components/ThemeSwitch/theme-switch"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen dark:bg-gray-700 overflow-y-auto overflow-x-hidden">
        <Navbar/>
        <Outlet/>
        </div>
  )
}

export default Layout