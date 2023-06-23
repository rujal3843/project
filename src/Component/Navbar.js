import React, { useState } from 'react';
import Search from './Navbar/Search';
import Bell from './Navbar/Bell';
import Heart from './Navbar/Heart';
import Profile from './Navbar/Profile';
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [navi, setNavi] = useState(false)
  const handleclick = () => setNavi(!navi)

  return (
    // <div className="flex justify-between items-center mt-2 sticky top-0 z-10 bg-white">
    //   <h1 className="font-bold text-3xl">Dashboard</h1>

    //   <div className="flex gap-7">

    //     <div>
    //       <Search />
    //     </div>

    //     <div>
    //      <Bell />
    //     </div>

    //     <div>
    //      <Heart />
    //     </div>

    //     <div>
    //       <Profile />
    //     </div>



    //   </div>
    // </div>



    <div className='flex justify-between items-center mt-2 sticky top-0 z-10 bg-white'>
      <div>
        {/* <FaTimes /> */}
        <NavLink to='/' className='text-xl'>Dashboard</NavLink>
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>
        <li><Search /></li>
        <li><Bell /></li>
        <li><Heart /></li>
        <li><Profile /></li>
      </ul>

      {/* icons */}
      <div onClick={handleclick} className='md:hidden z-10'>
        {!navi ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={
        !navi
          ? 'hidden'
          : 'absolute top-0 left-0 w-full bg-[white] flex flex-col justify-center items-center'
      }>
        <li className='py-2 text-[25px] onClick={handleclick}'><Search /></li>
        <li className='py-2 text-[25px] onClick={handleclick}'><Bell /></li>
        <li className='py-2 text-[25px] onClick={handleclick}'><Heart /></li>
        <li className='py-2 text-[25px] onClick={handleclick}'><Profile /></li>

      </ul>
    </div>



  );
};

export default Navbar;
