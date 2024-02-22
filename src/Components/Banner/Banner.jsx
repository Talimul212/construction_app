/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="h-52 w-96 mx-auto "
              src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-52 w-[80%] mx-auto"
              src="https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-52 w-[80%] mx-auto"
              src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
