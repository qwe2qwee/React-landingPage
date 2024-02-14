import React from "react";

import Slideshow from "./slide";
import Servers from "./servers";

const Serveces = () => {
  return (
    <div className='serves flex items-center justify-center h-70 flex-col sections mb-10 '>
      <div className=' mb-7 mt-6 text-center'>
        <h2 className=' mb-5 text-3xl head'>خدماتنا؟</h2>
        <p className=" text-col">سنعمل لإيصالك إلى مبتغاك عبر هذه الخدمات</p>
      </div>
      <div className='slideS'>
        <Slideshow />
      </div>
      <div className="slideL">
        <Servers/>
      </div>
    </div>
  );
};

export default Serveces;
