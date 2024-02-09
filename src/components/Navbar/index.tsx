import ThemeSwitch from '../ThemeSwitch/theme-switch'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='w-[90%] py-1 mx-auto mt-3 rounded-xl flex items-center justify-between bg-slate-100 px-2'>
    <ul className='flex gap-10'>
        <Link to={"/"} className='py-2 px-3 bg-green-100 rounded-xl  text-sm'>Home</Link>
        <Link to={"/analytics"} className='py-2 px-3 bg-green-100 rounded-xl text-sm'>Analytics</Link>
    </ul>
    <ThemeSwitch/>
   </nav>
  )
}

export default Navbar