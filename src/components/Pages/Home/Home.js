import React from "react";

import data from "./Data";

const Home = () => {
  return (
    <div className=' bg-stone-500 caret-blue-800 relative' id='Home'>
      <div className='pr-12 pt-16 in-home'>
        <h1 className='text-5xl mb-6'>الاتجاه الرقمي</h1>
        <h3 className=' text-2xl mr-2'>نوجه مشروعك نحو النجاح</h3>
      </div>
      {data[1]}
      {data[2]}

      {data[0]}
      <div className=' h-16 w-full bg-yellow-400 absolute post2'></div>
    </div>
  );
};

export default Home;
