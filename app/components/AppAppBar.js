"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import CustomImage from "../../lib/customImage";
import whiteLogo from "../../public/assets/white-logo.png";
import darkLogo from "../../public/assets/black-logo.png";
import { menuItems } from "../../lib/fakeData";
import AlertDialog from "../../lib/AlertDialog";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "../redux/slices/alertDialogSlice";
import CustomWhatsAppIcon from "../../public/assets/WhatsApp-Logo..png";
import CustomWeChatIcon from "../../public/assets/WeChat-Icon-Logo.png";

function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const { colorMode } = useSelector((state) => state.colorMode);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const dispatch = useDispatch();
  const handleQRShow = (plateForm) => {
    dispatch(openDialog(plateForm));
  };
  return (
    <React.Fragment>
      {isOpen && <AlertDialog />}
      <AppBar
        position="fixed"
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          bgcolor:
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(24px)",
          border: "1px solid",
          borderColor: "divider",
          boxShadow:
            theme.palette.mode === "light"
              ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
              : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
        })}>
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}>
              <CustomImage
                style={{ width: "150px", height: "auto", cursor: "pointer" }}
                src={colorMode === "dark" ? whiteLogo : darkLogo}
                alt="logo of east company"
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {menuItems.map((menu) => (
                  <MenuItem
                    key={menu}
                    onClick={() => scrollToSection(menu)}
                    sx={{ py: "6px", px: "12px" }}>
                    <Typography
                      variant="body2"
                      sx={{ textTransform: "uppercase" }}
                      color="text.primary">
                      {menu}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link
                  variant="body2"
                  href="mailto:sales1@eastlongsz.com"
                  color="text.primary">
                  E-mail: sales1@eastlongsz.com
                </Link>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px" }}>
                <Link
                  variant="body2"
                  href="tel:+861712345667"
                  color="text.primary">
                  WhatsApp/WeChat: +86 13692181738
                </Link>
              </MenuItem>
              <Button
                sx={{ mr: "5px" }}
                color="primary"
                variant="contained"
                size="medium"
                onClick={() => handleQRShow("WhatsApp")}>
                <CustomImage
                  style={{ width: "33px", height: "auto" }}
                  src={CustomWhatsAppIcon}
                />
                WhatsApp
              </Button>
              <Button
                sx={{ ml: "5px" }}
                color="primary"
                variant="outlined"
                size="medium"
                onClick={() => handleQRShow("WeChat")}>
                <CustomImage
                  style={{ width: "30px", height: "auto" }}
                  src={CustomWeChatIcon}
                />
                WeChat
              </Button>
              <ToggleColorMode />
            </Box>
            {/* ================
               For Mobile menus start here
               =================*/}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}>
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}>
                    <ToggleColorMode />
                  </Box>
                  {menuItems.map((menu) => (
                    <MenuItem
                      onClick={() => scrollToSection(menu)}
                      key={menu}
                      sx={{ textTransform: "uppercase" }}>
                      {menu}
                    </MenuItem>
                  ))}

                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: "100%" }}>
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: "100%" }}>
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

export default AppAppBar;
