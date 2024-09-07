"use client";
import React, { useRef } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'


const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiperRef = useRef();
  return (
    <Swiper onSwiper={(swiper) => {
      swiperRef.current = swiper;
    }}
    className="">
      <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiperRef.slidePrev()}>
            <PiCaretLeftBold className={iconStyles} />
        </button>
        <button className={btnStyles} onClick={()=> swiperRef.slideNext()}>
            <PiCaretRightBold className={iconStyles} />
        </button>
    </div>
    </Swiper>
  );
};

export default WorkSliderBtns