"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { featureProducts } from "../../lib/fakeData";
import CustomImage from "../../lib/customImage";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSelector } from "react-redux";
import SlidingCard from "@/lib/SlidingCard";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

export default function Features() {
  const { colorMode } = useSelector((state) => state.colorMode);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = featureProducts[selectedItemIndex];
  const GradientText = styled(Typography)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.success.main})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }));

  return (
    <Box id="features" sx={{ py: { xs: 5, sm: 6 } }}>
      <SlidingCard>
        <GradientText component="h2" variant="h2" sx={{ textAlign: "center" }}>
          Unlock Productivity With EASL SMT Machines
        </GradientText>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: { xs: 2, sm: 4 },
              textAlign: "justify",
              mt: 3,
              maxWidth: "85%",
            }}>
            EASL&apos;s SMT Machines are top-tier, innovative solutions designed
            for various industries. These machines are engineered for precision,
            efficiency, and durability, capable of converting a wide range of
            materials. They offer superior performance in tasks such as cutting,
            folding, and packaging. With EASL&apos;s SMT Machines, businesses
            can significantly enhance their production capabilities and
            streamline their operations.
          </Typography>
        </Box>
      </SlidingCard>
      <Grid container spacing={3}>
        {featureProducts.map(({ imageLight, list, title }) => (
          <Grid item xs={12} md={6} key={title}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <CustomImage
                  src={imageLight}
                  blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
                  style={{
                    width: "70%",
                    height: "auto",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">{title}</Typography>
                {list.map((li) => (
                  <List key={li}>
                    <ListItem
                      sx={{
                        m: 0,
                        p: 0,
                      }}>
                      <SubdirectoryArrowRightIcon
                        sx={{
                          color: "primary.main",
                        }}
                      />
                      <ListItemText primary={li} />
                    </ListItem>
                  </List>
                ))}
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://www.alibaba.com/product-detail/Fully-Automatic-SMT-Stencil-Printer-SMT_1601047844062.html?spm=a2700.shop_plgr.41413.101.bbd553edfQ3bEd",
                      "_blank",
                    )
                  }>
                  View More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
