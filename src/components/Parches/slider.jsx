import React from "react";

import Loading from "../Others/Loading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/slider.css";

// import required modules
import { Pagination } from "swiper";

function slider({ images }) {
  if (!images) {
    return <></>;
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="Image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default slider;
