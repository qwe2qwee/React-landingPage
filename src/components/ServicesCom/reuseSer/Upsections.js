import React from "react";

const Upsections = ({ children }) => {
  return (
    <div className=' w-full h-52  text-center pt-16 text-xl top-section relative'>
      <div className='relative big-s-box'>
        {" "}
        <h3 className='text-color-s pt-4 relative z-10 '>
          تصميم وبرمجة المواقع والتطبيقات
        </h3>{" "}
        <div class='absolute inset-x-0 bottom-0 h-1 bg-gray-400 z-0 back-line-s'></div>
      </div>
      <p className=' pt-6'>
        هنا نصمم ونبني موقعك او تطبيقك الالكتروني ، من الفكرة الى الواقع بتصميم
        فريد وأسلوب سهل لتبدا رحلتك من حيث انتهى الاخرون .
      </p>
      {children}
    </div>
  );
};

export default Upsections;
