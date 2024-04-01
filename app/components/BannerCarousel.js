"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/BannerCarousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import CustomImage from "../../lib/customImage";
import { carouseImage } from "../../lib/fakeData";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

const BannerCarousel = ({ mode }) => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Container maxWidth={"xl"}>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          // autoHeight={true}
          style={{
            zIndex: 0,
            // height: "84vh",
            marginTop: "60px",
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          {carouseImage.map(({ id, image }) => (
            <SwiperSlide key={id}>
              <CustomImage
                onClick={() =>
                  window.open(
                    "https://eastlong.en.alibaba.com/productgrouplist-936782974/SMT_Reflow_Oven.html?spm=a2700.shop_index.11406.3.88cb7391KHt5l3",
                    "_blank",
                  )
                }
                src={image}
                alt="carousel img"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default BannerCarousel;
