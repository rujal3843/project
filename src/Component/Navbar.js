import React from 'react';
import Search from './Navbar/Search';
import Bell from './Navbar/Bell';
import Heart from './Navbar/Heart';
import Profile from './Navbar/Profile';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-2 sticky top-0 z-10 bg-white">
      <h1 className="font-bold text-3xl">Dashboard</h1>

      <div className="flex gap-7">

        <div>
          <Search />
        </div>

        <div>
         <Bell />
        </div>

        <div>
         <Heart />
        </div>

        <div>
          <Profile />
        </div>



      </div>
    </div>
  );
};

export default Navbar;
