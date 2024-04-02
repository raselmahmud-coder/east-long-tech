"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import CustomImage from "../../lib/customImage";
import whiteLogo from "../../public/assets/white-logo.png";
import darkLogo from "../../public/assets/black-logo.png";
import { menuItems, nestedMenus } from "@/lib/fakeData";
import AlertDialog from "@/lib/AlertDialog";
import { Container, Link, Menu, useScrollTrigger } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "../redux/slices/alertDialogSlice";
import CustomWeChatIcon from "@/public/images/WeChat-Icon-Logo.png";
import CustomWhatsAppIcon from "@/public/images/WhatsApp-Logo..png";

function AppAppBar({ position = "static", top }) {
  const [open, setOpen] = React.useState(false);
  const { colorMode } = useSelector((state) => state.colorMode);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(
      sectionId.split(" ").join("-"),
    );
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
  const trigger = useScrollTrigger();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);

  const handleMainMenuItemMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuItemMouseEnter = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };
  return (
    <React.Fragment>
      {isOpen && <AlertDialog />}
      <AppBar
        position={position}
        sx={(theme) => ({
          transition: "top 0.5s",
          top: top,
          mt: 0,
          py: 1,
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "space-between",
          flexShrink: 0,
          bgcolor:
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid",
          borderColor: "divider",
          boxShadow:
            theme.palette.mode === "light"
              ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
              : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
        })}>
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // ml: "-18px",
                // px: 0,
              }}>
              <CustomImage
                style={{ width: "180px", height: "auto", cursor: "pointer" }}
                src={colorMode === "dark" ? whiteLogo : darkLogo}
                alt="logo of east company"
              />
              <Box sx={{ display: { xs: "none", md: "flex", gap: 7 } }}>
                {menuItems.map((menu) => (
                  <MenuItem
                    key={menu}
                    onClick={() => scrollToSection(menu)}
                    onMouseEnter={
                      menu == "products"
                        ? handleMainMenuItemMouseEnter
                        : undefined
                    }
                    // onMouseLeave={menu === "products" ? handleClose : undefined}
                    sx={{ py: "6px", px: "12px" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textTransform: "capitalize" }}
                      color="text.primary">
                      {menu}
                    </Typography>
                  </MenuItem>
                ))}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}>
                  {nestedMenus.map(({ title, href }) => (
                    <MenuItem key={title}>
                      <Link
                        href={href}
                        target="_blank"
                        variant="body1"
                        sx={{ textTransform: "capitalize" }}
                        color="text.primary">
                        {title}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
                alignItems: "center",
              }}>
              <Button
                title="Click Here"
                sx={{ ml: "25px" }}
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
                title="Click Here"
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
                      sx={{ textTransform: "capitalize" }}>
                      {menu}
                    </MenuItem>
                  ))}

                  <Divider />
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Link
                      variant="body2"
                      href="mailto:info@eastlongsz.com"
                      color="text.primary">
                      E-mail: info@eastlongsz.com
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
