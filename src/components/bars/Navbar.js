import React from "react";

const Navbar = (props) => {
  return (
    <div className='hidden md:block'>
      <nav className='bg-gray-200 sm:bg-white p-5 text-center flex items-center justify-between lg:px-11'>
        <div className='flex items-center space-x-4 text-lg justify-between'>
          <a
            href='#Home'
            className='mx-2 hover:text-gray-900 hover:border-b-2 border-yellow-400 ml-6'>
            الرئيسية
          </a>
          <a
            href='#About'
            className='mx-2 text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-400'>
            من نحن
          </a>
          <a
            href='#Team'
            className='mx-2 text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-400'>
            الطاقم
          </a>
          <a
            href='#Contect'
            className='mx-2 text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-400'>
            تواصل معنا
          </a>
          <a
            href='#Media'
            className='mx-2 text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-400'>
            المدونة
          </a>
          <a
            href='#Start'
            className='bg-orange-700 rounded-full px-3 py-2 text-white main-back hard'>
            إبدا مشروعك
          </a>
        </div>
        <h3 className=' font-bold text-gray-800 mr-2 hidden md:block'>
          {props.logo}
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
