import React from "react";

import Slideshow from "./slide";

const Serveces = () => {
  return (
    <div className='serves flex items-center justify-center h-70 flex-col sections mb-9 '>
      <div className=" mb-7 mt-6 text-center">
        <h2 className=" mb-5 text-3xl head">خدماتنا؟</h2>
        <p>سنعمل لإيصالك إلى مبتغاك عبر هذه الخدمات</p>
      </div>
      <Slideshow />
    </div>
  );
};

export default Serveces;
