import React from "react";

import logoo from "./imgg/Scroll Group 29.svg";
import logo from "./imgg/Scroll Group 29.svg";

const About = () => {
  return (
    <div id='About' className=' sections flex flex-row h-full relative'>
      <div className='flot'></div>
      <div className='w-2/5 flex justify-end'>
        <img src={logoo} alt='man' className=' w-full mann object-cover' />
        <img src={logo} alt='manq' className='mann1 hidden object-cover ' />
      </div>
      <div className=' w-3/5 bg-transparent box1'>
        <h2 className=' bold-text'>نحن هنا</h2>
        <p className='mb-4'>
          صنع حلولًا متكاملة من خدمات الإنتاج المرئي والتسويــق الــرقمـــي
          وتطوير الهويات التّجارية من البحــث والإعـــداد إلــــى الإنتــــاج
          والإطـــــــلاق!
        </p>
        <button className=' w-32 rounded-full'>اطلب عرض</button>
      </div>
      <div className=' w-3/5 box2'>
        <button className='w-32 rounded-full '>اطلب عرض</button>
        <div>
          <h2 className=' bold-text text-3xl'>نحن هنا</h2>
          <p className='mb-4'>
            صنع حلولًا متكاملة من خدمات الإنتاج المرئي والتسويــق الــرقمـــي
            وتطوير الهويات التّجارية من البحــث والإعـــداد إلــــى الإنتــــاج
            والإطـــــــلاق!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
