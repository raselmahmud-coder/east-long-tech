"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/ExampleCarousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import CustomImage from "../../lib/customImage";
import { carouseImage } from "../../lib/fakeData";

const ExampleCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        // autoHeight={true}
        style={{
          zIndex: 0,
          // height: "40vh",
          // marginTop: "60px",
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {carouseImage.map(({ id, image }) => (
          <SwiperSlide
            key={id}
            style={{
              backgroundColor: "yellow",
            }}>
            <CustomImage
              src={image}
              alt="carousel"
              style={{ width: "550px", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExampleCarousel;
