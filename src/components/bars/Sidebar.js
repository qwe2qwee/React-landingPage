import React, { useState, useEffect } from "react";
import { MdSdCardAlert } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";

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
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""} block md:hidden z-30`}>
      <div className='toggle-button bg:border-yel rounded-lg w-6 h-6 flex items-center bg-center' onClick={toggleSidebar}>
       <CgMenu /> 
      </div>
      <div className='bg-gray-200 sm:bg-white p-5  flex flex-col items-start h-full pt-11'>
        <div className='flex flex-col items-start space-y-4 text-lg'>
          <a
            href='#Home'
            className='hover:text-gray-900 hover:border-b-2 border-yellow-500 flex'>
            <span className='pl-2'>
              <IoHomeSharp />
            </span>
            الرئيسية
          </a>
          <a
            href='#About'
            className='text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-500 flex'>
            <span className='pl-2'>
              <MdSdCardAlert />
            </span>
            من نحن
          </a>

          <a
            href='#Team'
            className='text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-500 flex'>
            <span className='pl-2'>
              <IoIosPeople />
            </span>
            الطاقم
          </a>
          <a
            href='#Contect'
            className='text-color2 hover:text-gray-900 hover:border-b-2 border-yel flex'>
            <span className='pl-2'>
              <RiContactsFill />
            </span>
            تواصل معنا
          </a>
          <a
            href='#Blog'
            className='text-color2 hover:text-gray-900 hover:border-b-2 border-yellow-500 flex'>
            <span className='pl-2'>
              <FaBloggerB />
            </span>
            المدونة
          </a>
        </div>
        <a
          href='#Start'
          className='bg-orange-700 rounded-full px-3 py-2 text-white mt-4 '>
          إبدا مشروعك
        </a>
        <h3 className='font-bold text-gray-800 mt-4 logo-onMd'>{props.logo}</h3>
      </div>
    </div>
  );
};

export default Sidebar;
