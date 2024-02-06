import ThemeSwitch from "../components/ThemeSwitch/theme-switch"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen">
        <ThemeSwitch/>
        <Outlet/>
        </div>
  )
}

export default Layout