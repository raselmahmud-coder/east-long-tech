"use client";
import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductCategories from "./products/ProductCategories";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 5, sm: 10 },
          pb: { xs: 8, sm: 12 },
        }}>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}>
            Our latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}>
              products
            </Typography>
          </Typography>
          <Typography
            sx={{
              mb: 3,
            }}
            variant="body1"
            textAlign="center"
            color="text.secondary">
            Explore our cutting-edge Machines, delivering high-quality solutions
            tailored to your needs. <br />
            Elevate your experience with top-tier features and services.
          </Typography>
        </Stack>
        <ProductCategories />
      </Container>
    </Box>
  );
}
