import { Box, Divider } from "@mui/material";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import ExampleCarousel from "./components/ExampleCarousel";
export default function Home() {
  return (
    <main>
      <ExampleCarousel/>
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Products />
        <Divider />
        <FAQ />
        <Divider />
      </Box>
    </main>
  );
}
