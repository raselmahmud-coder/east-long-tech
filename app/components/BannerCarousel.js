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
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LaunchIcon from "@mui/icons-material/Launch";

const BannerCarousel = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
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
          height: "84vh",
          marginTop: "60px",
          // backgroundColor: "green",
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {carouseImage.map(({ id, image, title }) => (
          <SwiperSlide
            key={id}
            style={
              {
                // backgroundColor: "bisque",
              }
            }>
            <Grid
              container
              spacing={1}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ textAlign: "center" }}
                order={matches && 1}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {title}
                </Typography>
                {id % 2 == 0 ? (
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: 1, md: 3 },
                      fontSize: { xs: 16, md: 27 },
                      px: { xs: 2, md: 5 },
                      py: { xs: 1, md: 3.5 },
                    }}>
                    Contact Us
                    <ArrowOutwardIcon />
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    sx={{
                      mt: { xs: 1, md: 3 },
                      fontSize: { xs: 16, md: 27 },
                      px: { xs: 2, md: 5 },
                      py: { xs: 1, md: 3.5 },
                    }}>
                    See More
                    <LaunchIcon />
                  </Button>
                )}
              </Grid>
              <Grid item xs={12} md={6} order={matches && 0}>
                <CustomImage
                  src={image}
                  alt="carousel"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerCarousel;
