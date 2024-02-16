import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./s.css";
import sirv1 from "./img/22.png";
import sirv2 from "./img/4.png";
import sirv3 from "./img/43.png";
import { Link } from "react-router-dom";

const Slideshow = () => {
  const settings = {
    dots: true,
    lazyLoad: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <>
      <Slider {...settings} className=' w-60 h-48 mar'>
        <div className='flex items-center justify-center'>
          <Link to='Servers'>
            <img src={sirv2} alt='s' className=' object-cover' />
          </Link>
        </div>
        <div>
          <img src={sirv3} alt='s' className=' object-cover' />
        </div>
        <div>
          <img src={sirv1} alt='s' className=' object-cover' />
        </div>
      </Slider>
    </>
  );
};

export default Slideshow;
