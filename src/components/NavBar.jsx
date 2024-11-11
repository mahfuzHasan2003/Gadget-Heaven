import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { RiMenu2Fill } from "react-icons/ri";

const NavBar = () => {
   let { pathname } = useLocation();
   const { cartLength, wishlistLength } = useContext(DataContext);
   const [openMenu, setOpenMenu] = useState(false);
   return (
      <nav
         className={`${
            pathname !== "/"
               ? "bg-white text-black"
               : "bg-primary-blue text-white"
         }`}>
         <div className='w-11/12 max-w-7xl mx-auto space-y-2 md:space-y-0 flex py-5 justify-between items-center relative'>
            <div>
               <Link to='/'>
                  <h2 className='text-xl md:text-2xl font-semibold'>
                     GadgetHeaven
                  </h2>
               </Link>
            </div>
            <ul
               className={`md:flex flex-col md:flex-row md:gap-5 justify-center md:justify-normal order-3 md:order-none absolute md:static right-0 ${
                  openMenu ? "flex top-20" : "hidden"
               } ${
                  pathname === "/" ? "bg-purple-500" : "bg-gray-100"
               } z-20 *:px-5 *:py-2 md:bg-transparent md:*:p-0 rounded-md transition min-w-40 md:w-auto text-center`}>
               <NavLink
                  to='/'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  Home
               </NavLink>
               <NavLink
                  to='/statistics'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  Statistics
               </NavLink>
               <NavLink
                  to='/dashboard'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  Dashboard
               </NavLink>
               <NavLink
                  to='/FAQs'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  FAQs
               </NavLink>
            </ul>
            <div className='flex gap-2 md:gap-4 justify-center md:justify-normal'>
               <Link to='/dashboard'>
                  <button className='border p-2 rounded-full relative'>
                     <IoCartOutline size={18} />
                     {cartLength !== 0 ? (
                        <span className='absolute -top-2 -right-3 bg-white border rounded-full w-6 h-6 text-red-700 text-sm'>
                           {cartLength}
                        </span>
                     ) : (
                        ""
                     )}
                  </button>
               </Link>
               <Link to='/dashboard'>
                  <button className='border p-2 rounded-full relative'>
                     <FaRegHeart size={18} />
                     {wishlistLength !== 0 ? (
                        <span className='absolute -top-2 -right-3 bg-white border rounded-full w-6 h-6 text-red-700 text-sm'>
                           {wishlistLength}
                        </span>
                     ) : (
                        ""
                     )}
                  </button>
               </Link>
               <button
                  className='md:hidden'
                  onClick={() => setOpenMenu(!openMenu)}>
                  <RiMenu2Fill size={30} />
               </button>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
