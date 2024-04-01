import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import AnimatedNumber from "@/lib/AnimatedNumber";

const CompanyValues = ({ title, number, mode, marginBottom }) => {
  return (
    <>
      <Stack
        direction="column"
        color="inherit"
        component={Card}
        spacing={1}
        useFlexGap
        sx={{
          p: 3,
          height: "100%",
          border: "1px solid",
          borderColor: "grey.800",
          background:
            mode === "dark"
              ? "linear-gradient(to right, #090E10, #5B6B7C)"
              : "linear-gradient(to right, #95070761, #FBFCFE)",
        }}>
        <Typography
          fontWeight="bold"
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center" }}>
          <AnimatedNumber value={number} />+
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify" }}>
          {title}
        </Typography>
      </Stack>
    </>
  );
};

export default CompanyValues;
