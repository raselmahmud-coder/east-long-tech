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
import { nestedMenus } from "@/lib/fakeData";
import courierServices from "@/public/assets/Express_collection.png";

import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { Grid } from "@mui/material";

function Copyright() {
  return (
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ mt: { xs: 5, md: 2 } }}>
      <Link href="/">Shenzhen Eastlong Technology Co., Ltd. </Link>
      {"© "}
      2023 - {new Date().getFullYear()}{" "}
      <Link
        color="text.secondary"
        target="_blank"
        href="https://github.com/raselmahmud-coder">
        Build By RM
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ mb: 4 }}>
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
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h3" sx={{}}>
            Our Int. Express Partner
          </Typography>

          <CustomImage
            src={courierServices}
            unoptimized={true}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
            alt="express collection logo"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: { md: "flex" }, justifyContent: "flex-end" }}>
          <Box>
            <Typography variant="body1" fontWeight={700}>
              Products
            </Typography>
            {nestedMenus.map(({ href, title }) => (
              <Link
                color="text.secondary"
                href={href}
                key={title}
                sx={{ display: "flex", alignItems: "center" }}>
                <SubdirectoryArrowRightIcon />
                {title}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
          flexDirection: { xs: "column", md: "row" },
        }}>
        <Typography sx={{}} variant="body1">
          204, Building A17, Cuigang Industrial Zone 4, Huaide Community, Fuyong
          Street, Shenzhen, Guangdong, China
        </Typography>

        <Copyright />
      </Box>
    </Container>
  );
}
