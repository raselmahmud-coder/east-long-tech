"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import CustomImage from "../../lib/customImage";
import { UserTestimonials, darkLogos, whiteLogos } from "../../lib/fakeData";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import RibbonHeading from "@/lib/RibbonHeading";

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;
  const { colorMode } = useSelector((state) => state.colorMode);

  return (
    <Box
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection:"column",
          textAlign: "center",
        }}>
          <Typography component="h2" variant="h2" color="text.primary" sx={{
          textAlign: "center",
        }}>
            Testimonials
          </Typography>
        <Divider
          variant="middle"
          sx={{
            borderTop: `2px solid ${colorMode === "dark" ? "red" : "black"}`,
            width: { xs: 200, sm: 300, md: 200 },
            mx: "auto",
          }}
        />

</Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            textAlign: "justify",
          }}>
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>

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
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        // autoHeight={true}
        style={{
          zIndex: 0,
          // height: "40vh",
          margin: "30px 0px",
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}>
        {UserTestimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            // className={customStyles.studentFeedback}
            style={{
              borderRadius: "5px",
            }}>
            <Card
              sx={{
                minHeight: { xs: "300px", sm: "300px", md: "300px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}>
              <CardContent sx={{ position: "relative" }}>
                <FormatQuoteIcon
                  sx={{ position: "absolute", transform: "rotate(180deg)" }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    pt: 4,
                  }}>
                  {testimonial.testimonial}
                </Typography>
                <FormatQuoteIcon sx={{ position: "absolute", right: 22 }} />
              </CardContent>
              <Box
                sx={{
                  mt: 6,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}>
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <CustomImage
                  blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
                  width={100}
                  height={90}
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
