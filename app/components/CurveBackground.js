"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CustomImage from "../../lib/customImage";
import product1 from "../../public/assets/carousel/carousel (1).jpg";

const CurveBackground = () => {
  return (
    <Container
      sx={
        {
          // display: "flex",
          // justifyContent:"center"
          // mx: "auto",
        }
      }>
      <Box
        sx={{
          display: "block",
          textAlign: "center",
          // mx: "auto",
          width:"100%",
          position: "relative",
          // overflow:"hidden"
        }}>
        <CustomImage
          src={product1}
          style={{ width: "350px", height: "auto" }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "grey",
            width: "50%",
            height: "58%",
            display: "inline",
            clipPath: "polygon(0 0, 100% 0%, 94% 100%, 0% 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "grey.700",
            width: "48%",
            py: 2,
            px: 6,
            height: "auto",
            display: "inline",
            clipPath: "polygon(0 0, 100% 0%, 94% 100%, 0% 100%)",
          }}>
          <Typography variant="h4">FOG Bonding Machine</Typography>
          <Typography
            variant="body1"
            sx={{
              py: 2,
              textAlign:"justify"
            }}>
            The machine is designed for 0.96-7 inches LCD products, automatic
            ACF auto attaching for single FPC, FPC alignment, FPC main-bonding
            requirements
          </Typography>
          <Button variant="contained">View More</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CurveBackground;
