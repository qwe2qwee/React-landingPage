import React from "react";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='hidden md:block'>
      <div className='bg-gray-200 sm:bg-white p-5 text-center flex items-center justify-between lg:px-11 hat'></div>
      <nav className='bg-gray-200 sm:bg-white p-5 text-center flex items-center justify-between lg:px-11 w-full fixed z-50 top-0'>
        <div className='flex items-center space-x-4 text-lg justify-between'>
          <Link
            to='/'
            className='mx-2 hover:text-gray-900 hover:border-b-2 border-yellow-400 ml-6'>
            الرئيسية
          </Link>
          <Link to='/Servers' className='mx-2 text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-400'>
            من نحن
          </Link>
          <Link className='mx-2 text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-400'>
            الطاقم
          </Link>
          <Link className='mx-2 text-color2 hover:er:t-gray-900 hover:border-b-2 border-yellow-400'>
            تواصل معنا
          </Link>
          <Link className='mx-2 text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-400'>
            المدونة
          </Link>
          <Link className='bg-orange-700 rounded-full px-3 py-2 text-white main-back hard'>
            إبدا مشروعك
          </Link>
        </div>
        <h3 className=' font-bold text-gray-800 mr-2 hidden md:block'>
          {props.logo}
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
