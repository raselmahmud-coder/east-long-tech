import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductCategories from "./products/ProductCategories";

export default function Hero({ mode }) {
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
      <Box
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
            variant="h2"
            sx={{
              display: "flex",
              alignSelf: "center",
              textAlign: "center",
            }}>
            Our Latest&nbsp;
            <Typography
              component="span"
              variant="h2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}>
              Products
            </Typography>
          </Typography>
          <Typography
            sx={{
              mb: { xs: 1, md: 4 },
              px: { xs: 2 },
              textAlign: { xs: "justify", md: "center" },
            }}
            variant="body1"
            color="text.secondary">
            Explore our cutting-edge Machines, delivering high-quality solutions
            tailored to your needs.{" "}
            <Box
              component={"br"}
              sx={{ display: { xs: "none", md: "block" } }}
            />
            Elevate your experience with top-tier features and services.
          </Typography>
        </Stack>

        <ProductCategories mode={mode} />
      </Box>
    </Box>
  );
}
