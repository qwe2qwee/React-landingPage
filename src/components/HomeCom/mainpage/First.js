import React from "react";

import data from "../Data";


const First = () => {
  return (
    <div className=' caret-blue-800 relative' id='Home'>
      <div className='md:pr-12 pt-32 md:pt-16 in-home'>
        <h1 className='text-5xl mb-6'>الاتجاه الرقمي</h1>
        <h3 className=' text-2xl mr-2'>نوجه مشروعك نحو النجاح</h3>
      </div>

      {data.map(b => b)}
      <div className=' h-16 w-full bg-yellow-400 absolute post2'></div>
    </div>
  );
};

export default First;
