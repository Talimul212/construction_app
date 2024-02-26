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
    <div className="bg-green-400">
      <div className="w-[90%] mx-auto">
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
            <SwiperSlide className="  bg-transparent ">
              <div className=" min-h-screen  flex items-center gap-20 lg:flex-row-reverse">
                <img
                  style={{
                    width: "60%",
                    height: "50vh",
                  }}
                  src="https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg"
                  className=" rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-6xl font-bold w-[320px] text-left">
                    Discover Most Suitable Property
                  </h1>
                  <p className="py-6 text-left text-[15px] w-[350px]">
                    Find a variety of properties that suit you very easilty
                    Forget all difficulties in finding a residence for you
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  bg-transparent ">
              <div className=" min-h-screen gap-20 flex items-center lg:flex-row-reverse">
                <img
                  style={{
                    width: "60%",
                    height: "50vh",
                  }}
                  src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
                  className=" rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-6xl font-bold w-[320px] text-left">
                    Discover Most Suitable Property
                  </h1>
                  <p className="py-6 text-left text-[15px] w-[350px]">
                    Find a variety of properties that suit you very easilty
                    Forget all difficulties in finding a residence for you
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="  bg-transparent ">
              <div className=" min-h-screen gap-20 flex items-center lg:flex-row-reverse">
                <img
                  style={{
                    width: "60%",
                    height: "50vh",
                  }}
                  src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg"
                  className=" rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-6xl font-bold w-[320px] text-left">
                    Discover Most Suitable Property
                  </h1>
                  <p className="py-6 text-left text-[15px] w-[350px]">
                    Find a variety of properties that suit you very easilty
                    Forget all difficulties in finding a residence for you
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Banner;
