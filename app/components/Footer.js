import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import whiteLogo from "@/public/assets/white-logo.png";
import darkLogo from "@/public/assets/black-logo.png";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomImage from "@/lib/customImage";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"© "}
      <Link href="/">Shenzhen Eastlong Technology Co., Ltd. </Link>
      {new Date().getFullYear()}{" "}
      <Link
        color="text.secondary"
        target="_blank"
        href="https://github.com/raselmahmud-coder">
        Developed By RM
      </Link>
    </Typography>
  );
}

export default function Footer({ mode }) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        pt: { xs: 8, sm: 10 },
        pb: { xs: 4, sm: 5 },
        textAlign: { sm: "center", md: "left" },
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}>
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{mb:4}}>
              <CustomImage
                style={{ width: "150px", height: "auto", cursor: "pointer" }}
                src={mode === "dark" ? whiteLogo : darkLogo}
                alt="logo of east company"
              />
            <Typography variant="body1" fontWeight={600} gutterBottom>
            Shenzhen Eastlong Technology Co., Ltd.
            </Typography>
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  "aria-autocomplete": "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
          <Link color="text.secondary" href="#">
            Testimonials
          </Link>
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            Products
          </Link>
          <Link color="text.secondary" href="#">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#">
            Terms
          </Link>
          <Link color="text.secondary" href="#">
            Privacy
          </Link>
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}>
        <div>
          <Typography display="inline">
            204, Building A17, Cuigang Industrial Zone 4, Huaide Community,
            Fuyong Street, Shenzhen, Guangdong, China
          </Typography>

          <Copyright />
        </div>

        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}>
          <IconButton
            color="inherit"
            target="_blank"
            href="https://github.com/raselmahmud-coder"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}>
            <FacebookIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/rasel-mahmud-coder/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
