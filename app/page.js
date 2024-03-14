"use client";
import { Box, Container, CssBaseline, Divider } from "@mui/material";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import BannerCarousel from "./components/BannerCarousel";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import getLPTheme from "../lib/getLPTheme";
import { useSelector } from "react-redux";
import HotProductsPresent from "./components/products/HotProductsPresent";

export default function Home() {
  const { colorMode: mode } = useSelector((state) => state.colorMode);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  return (
    <React.Fragment>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <Container
          maxWidth="xl"
          component={"main"}
          sx={{ bgcolor: "background.default", mt: { sx: 8, md: 10 } }}>
          <AppAppBar />
          <BannerCarousel />
          <Hero />
          <Features />
          <HotProductsPresent />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Products />
          <Divider />
          <FAQ />
          <LogoCollection />
          <Divider />
          <Footer />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
