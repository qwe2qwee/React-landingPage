import React, { useState, useEffect } from "react";
import { MdSdCardAlert } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { FaBloggerB, FaArrowRightLong } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebarOutsideClick = (e) => {
    if (sidebarOpen && !e.target.closest(".sidebar")) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSidebarOutsideClick);

    return () => {
      document.removeEventListener("click", closeSidebarOutsideClick);
    };
  }, [sidebarOpen]);

  let icon;

  icon = (
    <div
      className='toggle-button bg:border-yel rounded-lg w-6 h-6 flex items-center bg-center'
      onClick={toggleSidebar}>
      <BiMenuAltRight />
    </div>
  );

  return (
    <div
      className={`sidebar ${sidebarOpen ? "open" : ""} block md:hidden z-30 `}>
      {icon}

      <div className='bg-white sm:bg-white p-5  flex flex-col items-start h-full pt-11 ssd'>
        <div
          className=' bg:border-yel rounded-lg w-6 h-6 flex items-center bg-center absolute toggle-in'
          onClick={toggleSidebar}>
          <FaArrowRightLong />
        </div>
        <div className='flex flex-col items-start space-y-4 text-lg w-full'>
          <Link
            to='/'
            className='hover:text-gray-900 hover:border-b-2 border-yellow-500 flex sidee'>
            <span className='pl-2'>
              <IoHomeSharp />
            </span>
            الرئيسية
          </Link>
          <Link
            to='/Servers'
            className='text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-500 flex sidee'>
            <span className='pl-2'>
              <MdSdCardAlert />
            </span>
            من نحن
          </Link>

          <Link className='text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-500 flex sidee'>
            <span className='pl-2'>
              <IoIosPeople />
            </span>
            الطاقم
          </Link>
          <Link className='text-color2 hover:text-gray-900 hover:border-b-2 flex sidee'>
            <span className='pl-2'>
              <RiContactsFill />
            </span>
            تواصل معنا
          </Link>
          <Link className='text-color2 hover:text-gray-900 hover:border-b-2  flex sidee'>
            <span className='pl-2'>
              <FaBloggerB />
            </span>
            المدونة
          </Link>
        </div>
        <Link className='bg-orange-700 rounded-full px-3 py-2 text-white mt-4 '>
          إبدا مشروعك
        </Link>
        <h3 className='font-bold text-gray-800 mt-4 logo-onMd'>{props.logo}</h3>
      </div>
    </div>
  );
};

export default Sidebar;
