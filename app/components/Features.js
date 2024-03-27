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
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useSelector } from "react-redux";
import SlidingCard from "@/lib/SlidingCard";
import RibbonHeading from "@/lib/RibbonHeading";

export default function Features() {
  const { colorMode } = useSelector((state) => state.colorMode);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = featureProducts[selectedItemIndex];

  return (
    <Box id="features" sx={{ py: { xs: 5, sm: 6 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <SlidingCard>
            <RibbonHeading>

            <Typography
              component="h2"
              variant="h2"
              color="text.primary"
              sx={{ textAlign: "center" }}>
              Featured Product
            </Typography>
                </RibbonHeading>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 }, textAlign: "justify", mt: 3 }}>
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the
              types of features, add-ons, or the benefits of the features.
            </Typography>
          </SlidingCard>

          {/*
          ==================
           For Mobile view start
          ================= */}
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}>
            {featureProducts.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  width:"100%",
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "success.main" : "grey.100";
                    }
                    return selectedItemIndex === index ? "success.main" : "grey.100";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              mt: 4,
            }}>
            <CustomImage
              src={featureProducts[selectedItemIndex].imageLight}
              style={{ width: "300px", height: "auto", margin: "auto" }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="h6" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              {selectedFeature.list.map((item, index) => (
                <List key={index}>
                  <ListItem
                    sx={{
                      m: 0,
                      p: 0,
                    }}>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor:
                            colorMode === "dark"
                              ? "secondary.dark"
                              : "secondary.light",
                        }}>
                        <VerifiedIcon
                          sx={{
                            color: "success.main",
                          }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item} />
                  </ListItem>
                </List>
              ))}
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}>
                <span>View more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
          {/*
          ==================
           For desktop view start
          ================= */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}>
            {featureProducts.map(({ title, list }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200";
                    }
                    return selectedItemIndex === index
                      ? "primary.dark"
                      : "grey.800";
                  },
                }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="h5"
                      fontWeight="bold">
                      {title}
                    </Typography>
                    {list.map((item, index) => (
                      <List key={index}>
                        <ListItem
                          sx={{
                            m: 0,
                            p: 0,
                          }}>
                          <ListItemAvatar>
                            <Avatar
                              sx={{
                                bgcolor:
                                  colorMode === "dark"
                                    ? "secondary.dark"
                                    : "secondary.light",
                              }}>
                              <VerifiedIcon
                                sx={{
                                  color: "success.main",
                                }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={item} />
                        </ListItem>
                      </List>
                    ))}

                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}>
                      <span>View more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}>
            <CustomImage
              style={{
                width: "523px",
                height: "auto",
                margin: "auto",
              }}
              src={featureProducts[selectedItemIndex].imageLight}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
