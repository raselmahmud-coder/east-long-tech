import React from "react";
import { Box, Grid, Stack, Typography, Card } from "@mui/material";

import CustomImage from "../../../lib/customImage";
import cer1 from "../../../public/assets/cer1.png";
import cer2 from "../../../public/assets/cer2.png";
import award from "../../../public/assets/awards.png";


const BrandQuality = ({ colorMode }) => {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{
          my: { xs: 4, sm: 5, md: 6 },
        }}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomImage
            src={cer1}
            style={{
              width: "100%",
              height: "80%",
              borderRadius: "5px",
            }}
            alt="company strength"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomImage
            src={cer2}
            style={{
              width: "100%",
              height: "80%",
              borderRadius: "5px",
            }}
            alt="company strength"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomImage
            src={award}
            style={{
              width: "100%",
              height: "80%",
              borderRadius: "5px",
            }}
            alt="company awards"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BrandQuality;
