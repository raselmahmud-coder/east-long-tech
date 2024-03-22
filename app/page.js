"use client";
import { Box, Container, CssBaseline, Divider } from "@mui/material";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import FAQ from "./components/FAQ";
import BannerCarousel from "./components/BannerCarousel";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import getLPTheme from "../lib/getLPTheme";
import { useSelector } from "react-redux";
import HotProductsPresent from "./components/products/HotProductsPresent";
import CompanyProfile from "./components/aboutUs/CompanyProfile";
import ContactUs from './components/contactUs/ContactUs';

export default function Home() {
  const { colorMode: mode } = useSelector((state) => state.colorMode);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  return (
    <React.Fragment>
      <ThemeProvider theme={LPtheme}>
      {/* <ThemeProvider theme={defaultTheme}> */}
        <CssBaseline />
        <Container
          maxWidth="xl"
          component={"main"}
          sx={{ bgcolor: "background.default", mt: { sx: 8, md: 10 } }}>
          <AppAppBar />
          <BannerCarousel mode={mode} />
          <Hero mode={mode}o />
          <Features mode={mode} />
          <HotProductsPresent mode={mode} />
          <Testimonials mode={mode} />
          <Highlights mode={mode} />
          <CompanyProfile mode={mode} />
          <FAQ mode={mode} />
          <LogoCollection mode={mode} />
          <ContactUs mode={mode}/>
          <Divider />
          <Footer mode={mode}/>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
