import React from "react";
import { Box, Grid, Stack, Typography, Card } from "@mui/material";

import CustomImage from "../../../lib/customImage";
import cer1 from "../../../public/assets/cer1.png";
import award from "../../../public/assets/awards.png";


const BrandQuality = ({ colorMode }) => {
  return (
    <>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
          // mt: { xs: 4, sm: 5, md: 5 },
        }}>
        Company{" "}
        <Typography
          component="span"
          variant="h2"
          sx={{
            color: (theme) =>
              colorMode === "light" ? "primary.main" : "primary.light",
          }}>
          Certification
        </Typography>
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          my: { xs: 4, sm: 5, md: 6 },
        }}>
        <Grid item xs={12} sm={8} md={8}>
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
        
        <Grid item xs={12} sm={4} md={4}>
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
