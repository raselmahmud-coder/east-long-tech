"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import Link from "next/link";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import getLPTheme from "../lib/getLPTheme";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/reduxStore";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({ children }) {
  const [mode, setMode] = React.useState("dark");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
          <CssBaseline />
          <Provider store={store}>
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Box sx={{ mt: 8 }}>{children}</Box>
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
