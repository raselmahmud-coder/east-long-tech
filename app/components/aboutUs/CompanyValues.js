import React from "react";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import AnimatedNumber from "@/lib/AnimatedNumber";

const CompanyValues = ({ title, number, mode, marginBottom }) => {
  return (
    <Grid
      container
      spacing={0}
      alignItems={"center"}
      sx={{
        py: 2,
        px: 1,
        mb: marginBottom,
        background:
          mode === "dark"
            ? "linear-gradient(to right, #090E10, #5B6B7C)"
            : "linear-gradient(to right, #c1c3c4, #ffffff00)",
        boxShadow: 3,
      }}>
      <Grid item xs={9} sm={8} md={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography
          fontWeight="bold"
          component={"h6"}
          variant="h6"
          gutterBottom
          sx={{ textAlign: "right", maxWidth:{md:"80%"} }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={3} sm={4} md={4}>
        <Typography component={"h2"} variant="h2" sx={{ textAlign: "right" }}>
          <AnimatedNumber value={number} />+
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CompanyValues;
