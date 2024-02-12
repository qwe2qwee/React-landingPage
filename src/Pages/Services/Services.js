import React from "react";
import "./Services.css";
import Upsections from "../../components/ServicesCom/reuseSer/Upsections";
import Sbottun from "../../components/ServicesCom/reuseSer/Sbottun";
const Services = () => {
  return (
    <div className="services-sec"> 
    <Upsections>
      <div className='h-120 flex flex-col m-5 box-top-section pb-12'>
        <div className='flex flex-row'>
          <div className='flex-1 rounded-full bg-blue-500 mx-3 my-2 bottuns-in box-1 py-1'>
            دراسة وتحليل
          </div>
          <div className='flex-1 rounded-full bg-blue-500 mx-3 my-2 bottuns-in box-2 py-1'>
            تخطيط وتصميم
          </div>
          <div className='flex-1 rounded-full bg-blue-500 mx-3 my-2 bottuns-in box-3 py-1'>
            برمجة وتنفيذ
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex-1 rounded-full bg-blue-500 mx-3 my-2 bottuns-in box-3 py-1'>
            مراجعة
          </div>
          <div className='flex-1 rounded-full bg-blue-500 mx-3 my-2 bottuns-in box-1 py-1'>تسليم</div>
          <div className='flex-1 rounded-full bg-blue-500 mx-3 my-2 bottuns-in box-2 py-1'>
            صيانة ودعم
          </div>
        </div>
       <Sbottun/>
      </div>
      
    </Upsections>
    </div>
  );
};

export default Services;
