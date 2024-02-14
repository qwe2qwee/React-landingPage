import React, { useRef } from "react";

import Slider from "react-slick";
import vid1 from "./img2/vid1.mp4";
import vid3 from "./img2/vid22.mp4";
import vid4 from "./img2/vid33.mp4";
import dottedSquareImage from "./img2/Dotted Square 2.png";

const TopSection = () => {
  const sliderRef = useRef(null);
  const videosRefs = useRef([]);

  const videos = [vid1, vid3, vid4];

  const handleBeforeChange = (oldIndex, newIndex) => {
    pauseAllVideos(); // Pause all videos when changing slide
  };

  const pauseAllVideos = () => {
    videosRefs.current.forEach((videoRef) => {
      if (videoRef && !videoRef.paused) {
        videoRef.pause();
      }
    });
  };

  const baseSettings = {
    dots: true,
    lazyLoad: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: (
      <svg
        id='left_btn'
        xmlns='http://www.w3.org/2000/svg'
        width='29.597'
        height='30.442'
        viewBox='0 0 29.597 30.442'>
        <rect
          id='Rectangle_51'
          data-name='Rectangle 51'
          width='29.597'
          height='30.442'
          rx='5'
          fill='#ffd42e'
          opacity='0.9'
        />
        <path
          id='Path_70'
          data-name='Path 70'
          d='M3026.613,872,3022,878.091l4.612,6.091'
          transform='translate(-3009.957 -863.115)'
          fill='none'
          stroke='#f9692b'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='3'
        />
      </svg>
    ),
    prevArrow: (
      <svg
        id='right_btn'
        xmlns='http://www.w3.org/2000/svg'
        width='30.443'
        height='30.442'
        viewBox='0 0 30.443 30.442'>
        <rect
          id='Rectangle_52'
          data-name='Rectangle 52'
          width='30.442'
          height='30.442'
          rx='5'
          transform='translate(0)'
          fill='#ffd42e'
          opacity='0.9'
        />
        <path
          id='Path_69'
          data-name='Path 69'
          d='M3022,872l4.612,6.091L3022,884.182'
          transform='translate(-3009.228 -863.115)'
          fill='none'
          stroke='#f9692b'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='3'
        />
      </svg>
    ),
  };

  const settings = { ...baseSettings, beforeChange: handleBeforeChange };

  return (
    <>
      <div className=' h-full mt-7 video-hold relative'>
        <img
          src={dottedSquareImage}
          alt='dotted-square'
          className='absolute top-0 right-0'
        />
        <img
          src={dottedSquareImage}
          alt='dotted-square'
          className='absolute bottom-0 left-0'
        />
        <div className='max-w-xl mx-auto video-ser bg-transparent'>
          {videos && (
            <Slider {...settings} className='mar' ref={sliderRef}>
              {videos.map((vid, index) => (
                <div
                  key={index}
                  className='relative aspect-w-16 aspect-h-9 z-50 bg-transparent '>
                  <video
                    ref={(ref) => (videosRefs.current[index] = ref)}
                    className='inset-0 object-cover bg-transparent'
                    controls>
                    <source src={vid} type='video/mp4' />
                  </video>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default TopSection;
