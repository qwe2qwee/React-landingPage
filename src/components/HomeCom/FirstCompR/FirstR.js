import React from 'react';
import Sbottun from '../../ServicesCom/reuseSer/Sbottun';
import './FirstR.css'
const FirstR = ({D,C,U}) => {
  return (
    <div className='h-screen flex justify-center items-baseline  ht'>
    <div className='w-full bg-white p-8 rounded-lg absolute top-2 mt-0 pt-16 md:pt-32 text-center'>
      <div className='relative big-s-box'>
        {" "}
        <h3 className='text-color-s pt-4 relative z-10 '>{U[0]} </h3>{" "}
        <div class='absolute inset-x-0 bottom-0 h-1  z-0 back-line-s'></div>
      </div>
      <p className='p-6 m-auto text-center max-w-md '>{U[1]}</p>
    </div>
    <div className='h-screen w-screen flex justify-center items-center '>
      <div className=' h-96 bg-whiterounded-lg w-full relative'>
        <div className='flex justify-between md:flex-row relative z-10 lg:px-80 md:px-20 lg:top-4 flex-col text-center items-center'>
          <div className='w-2/3 sm:w-1/3 max-w-52  bg-white p-4 rounded-lg shadow-md y-offset flex items-center flex-col text-center mx-3 min-h-52'>
            {C[0]}
            <h3 className=' text-sm mt-8'>{D[0]}</h3>
          </div>
          <div className='w-2/3  sm:w-1/3 max-w-52 bg-white p-4 rounded-lg shadow-md flex items-center flex-col text-center my-12 md:my-0   mx-3 min-h-52'>
          {C[1]}
            <h3 className=' text-sm mt-8 '>{D[1]}</h3>
          </div>
          <div className='w-2/3 sm:w-1/3 max-w-52 bg-white p-4 rounded-lg shadow-md flex items-center flex-col text-center  mx-3 min-h-52'>
          {C[2]}
            <h3 className=' text-xs mt-8'>{D[2]} </h3>
          </div>
        </div>
        <Sbottun
          className={"z-20 text-center lg:bottom-5 md:block hidden "}
        />
        <div className=' h-56 absolute z-0 bottom-14 w-full backFlot hidden md:block'></div>
      </div>
    </div>
    <Sbottun className={"text-white butt md:hidden top-72"} />
  </div>

  )
}

export default FirstR;
