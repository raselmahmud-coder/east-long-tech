"use client";
import React, { useRef } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import companyPreview from "../../../public/assets/companyPreview.mp4";
import CompanyValues from "./CompanyValues";
import StrengthOfCompany from "./StrengthOfCompany";
import BrandQuality from "./BrandQuality";
import OurTeam from "./OurTeam";

const CompanyProfile = () => {
  const { colorMode } = useSelector((state) => state.colorMode);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.pause();
      setTimeout(() => {
        video.play();
      }, 50);
    } else if (video) {
      setTimeout(() => {
        video.pause();
      }, 50);
    }
  };

  return (
    <>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
          my: 2,
        }}>
        Company{" "}
        <Typography
          component="span"
          variant="h2"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}>
          Profile
        </Typography>
      </Typography>
      <Divider
        variant="middle"
        sx={{
          borderTop: `2px solid ${colorMode === "dark" ? "red" : "black"}`,
          width: { xs: 200, sm: 400, md: 450 },
          mx: "auto",
          mb: 3,
        }}
      />
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6} md={6}>
          <CompanyValues
            marginBottom={{ xs: 2, sm: 3, md: 4 }}
            title={"Two Main Production Equipment Solutions"}
            number={2}
            colorMode={colorMode}
          />
          <CompanyValues
            marginBottom={{ xs: 2, sm: 3, md: 4 }}
            title={`Focused On Machine Designing and Manufacturing Over 20 Years`}
            number={20}
            colorMode={colorMode}
          />
          <CompanyValues
            marginBottom={{ xs: 2, sm: 3, md: 4 }}
            title={`Training More Than 500 Experts and Technician For Customers`}
            number={500}
            colorMode={colorMode}
          />
          <CompanyValues
            title={`Helping Customers to Build More Than 100 New Factories Around The World`}
            number={100}
            colorMode={colorMode}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: "end",
            }}>
            <Box onClick={handleVideoClick}>
              <Box
                component={"video"}
                controls
                sx={{
                  width: { xs: "100%", md: "660px" },
                  height: { xs: "auto", md: "auto" },
                  objectFit: "cover",
                  "&:hover": {
                    transition: "all 0.5s",
                    cursor: "pointer",
                    transform: "scale(1.02)",
                  },
                }}
                preload="none"
                poster={`/assets/poster.jpg`}
                ref={videoRef}
                src={companyPreview}
                playsInline
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <StrengthOfCompany colorMode={colorMode} />
      <BrandQuality colorMode={colorMode} />
      <OurTeam colorMode={colorMode} />
    </>
  );
};

export default CompanyProfile;
