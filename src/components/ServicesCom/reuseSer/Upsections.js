import React from 'react';

const Upsections = ({children}) => {
  return (
    <div  className=' bg-slate-950 w-full h-52  text-center pt-16 text-xl top-section relative'>
      <h3 className='text-color-s pt-4'>تصميم وبرمجة المواقع والتطبيقات</h3>
      <p className=' pt-6'>
        هنا نصمم ونبني موقعك او تطبيقك الالكتروني ، من الفكرة الى الواقع بتصميم
        فريد وأسلوب سهل لتبدا رحلتك من حيث انتهى الاخرون .
      </p>
      {children}
    </div>
  );
}

export default Upsections;
