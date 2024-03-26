import React from "react";
import { Box, Typography } from "@mui/material";
import AnimatedNumber from "@/lib/AnimatedNumber";

const CompanyValues = ({ title, number, colorMode, marginBottom }) => {
  return (
    <>
      <Box
        sx={{
          background:
            colorMode === "dark"
              ? "linear-gradient(to right, #090E10, #5B6B7C)"
              : "linear-gradient(to right, #BFCCD9, #FBFCFE)",
          mb: marginBottom && marginBottom,
          borderRadius: 1,
          pr: 2,
        }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}>
          {title}
          <Typography
            component={"span"}
            sx={{
              ml: 3,
              fontSize: 45,
            }}>
            <AnimatedNumber value={number} />+
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default CompanyValues;
