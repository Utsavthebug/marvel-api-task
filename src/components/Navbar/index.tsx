import { NavLink } from 'react-router-dom'
import ThemeSwitch from '../ThemeSwitch/theme-switch'

const Navbar = () => {
  return (
   <nav className='w-[90%] dark:bg-slate-600 py-1 mx-auto mt-3 rounded-xl flex items-center justify-between bg-slate-100 px-2'>
    <ul className='flex gap-10'>
        <NavLink to={"/"} className='py-2 aria-[current=page]:bg-green-600 px-3 bg-green-100 rounded-xl  text-sm'>Home</NavLink>
        <NavLink to={"/analytics"} className='py-2 px-3 aria-[current=page]:bg-green-600  bg-green-100 rounded-xl text-sm'>Analytics</NavLink>
    </ul>
    <ThemeSwitch/>
   </nav>
  )
}

export default Navbar