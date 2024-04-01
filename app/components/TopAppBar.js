import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Container, IconButton, Link, MenuItem } from "@mui/material";
import HoverNAnimation from "@/lib/HoverNAnimation";
import FacebookIcon from "@/public/assets/fb_logo.png";
import alibaba from "@/public/assets/alibaba.png";
import LinkedInIcon from "@/public/assets/linkedin_logo.png";
import CustomImage from "@/lib/customImage";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function TopAppBar() {
  return (
    <Container maxWidth="xl">
      <Toolbar
        variant="dense"
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          my: 0,
          p: 0,
          minHeight: "0",
        }}>
        <MenuItem>
          <Link
            variant="body1"
            href="mailto:info@eastlongsz.com"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "grey.50",
            }}>
            <EmailIcon sx={{ mr: 2 }} />
            E-mail: info@eastlongsz.com
          </Link>
        </MenuItem>
        <MenuItem>
          <HoverNAnimation isAnimate={true}>
            <Link
              variant="body1"
              href="tel:+861712345667"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "grey.50",
              }}>
              <PhoneInTalkIcon sx={{ mr: 2 }} />
              WhatsApp/WeChat: +86 13692181738
            </Link>
          </HoverNAnimation>
        </MenuItem>
        <Box>
          <IconButton
            color="inherit"
            target="_blank"
            href="https://eastlong.en.alibaba.com/productgrouplist-936782974/SMT_Reflow_Oven.html?spm=a2700.shop_index.11406.3.88cb7391KHt5l3"
            aria-label="We Are Available on AliBaba"
            sx={{
              alignSelf: "center",
              "&:hover": {
                bgcolor: "success.main",
              },
            }}>
            <CustomImage
              blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
              src={alibaba}
              style={{ width: "22px", height: "auto", cursor: "pointer" }}
              alt="logo of east company"
            />
          </IconButton>
          <IconButton
            color="inherit"
            target="_blank"
            href="https://github.com/raselmahmud-coder"
            aria-label="GitHub"
            sx={{
              alignSelf: "center",
              "&:hover": {
                bgcolor: "success.main",
              },
            }}>
            <CustomImage
              blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
              src={FacebookIcon}
              style={{ width: "22px", height: "auto", cursor: "pointer" }}
              alt="logo of east company"
            />
          </IconButton>
          <IconButton
            color="inherit"
            target="_blank"
            href="https://github.com/raselmahmud-coder"
            aria-label="GitHub"
            sx={{
              alignSelf: "center",
              "&:hover": {
                bgcolor: "success.main",
              },
            }}>
            <CustomImage
              blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
              src={LinkedInIcon}
              style={{ width: "23px", height: "auto", cursor: "pointer" }}
              alt="logo of east company"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  );
}
