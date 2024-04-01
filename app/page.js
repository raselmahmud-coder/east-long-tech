"use client";
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
import ContactUs from "./components/contactUs/ContactUs";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import TopAppBar from "@/app/components/TopAppBar";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Home() {
  const { colorMode: mode } = useSelector((state) => state.colorMode);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const trigger = useScrollTrigger();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <React.Fragment>
      <ThemeProvider theme={LPtheme}>
        {/* <ThemeProvider theme={defaultTheme}> */}
        <CssBaseline />

        {!matches && (
          <HideOnScroll>
            <AppBar
              position="sticky"
              sx={{
                xs: "none",
                bgcolor:
                  mode === "light"
                    ? "#002D56"
                    : "rgb(45 45 45)",
                backdropFilter: "blur(24px)",
                border: "1px solid",
                borderColor: "divider",
                boxShadow:
                  mode === "light"
                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                    : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
              }}>
              <TopAppBar />
            </AppBar>
          </HideOnScroll>
        )}
        <AppAppBar position={"fixed"} top={trigger || matches ? 0 : 40} />
        <BannerCarousel mode={mode} />
        <Container
          maxWidth="xl"
          component={"main"}
          sx={{ bgcolor: "background.default", mt: { sx: 8, md: 10 } }}>
          <Hero mode={mode} />
          <Features mode={mode} />
          <HotProductsPresent mode={mode} />
          <Testimonials mode={mode} />
          <Highlights mode={mode} />
          <CompanyProfile mode={mode} />
          <FAQ mode={mode} />
          <LogoCollection mode={mode} />
          <ContactUs mode={mode} />
          <Divider />
          <Footer mode={mode} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
