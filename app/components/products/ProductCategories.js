"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import CustomImage from "../../../lib/customImage";
import { products } from "../../../lib/fakeData";
import { useSelector } from "react-redux";

const ProductCategories = () => {
  const { colorMode } = useSelector((state) => state.colorMode);
  return (
    <>
      <Grid container spacing={4}>
        {products.map(({ title, description, img }) => (
          <Grid
            key={title}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              perspective: "1000px",
              transition: "transform 0.8s",
              "& > div, & > div > div": {
                transition: "inherit",
              },
              "&:hover": {
                "& > div": {
                  transform: "rotateY(180deg)",
                },
              },
            }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: "500px", sm: "490px", md: "480px" },
                transition: "transform 1s",
                transformStyle: "preserve-3d",
              }}>
              {/* Front side content */}
              <Card
                variant="elevation"
                sx={{
                  bgcolor:
                    colorMode === "dark" ? "deepGray.main" : "primary.main",
                  color:
                    colorMode === "dark" ? "whiteCustom.main" : "black.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 9,
                  borderRadius: 5,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  WebkitBackfaceVisibility: "hidden",
                  MozBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                }}>
                <CardActionArea>
                  <CustomImage
                    src={img}
                    style={{
                      border: "3px",
                      borderStyle: "solid",
                      borderColor:
                        colorMode === "dark" ? "redCustom.main" : "accent.main",
                      borderRadius: "15px",
                      height: 100,
                      width: 100,
                      padding: "5px",
                      margin: "0 auto",
                      display: "flex",
                    }}
                    alt={title}
                  />
                  <CardContent>
                    <Typography
                      component="h2"
                      variant="h4"
                      color="text.primary">
                      {title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mx: 3,
                        textAlign: "justify",
                      }}>
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              {/* Back side content */}
              <Card
                variant="elevation"
                sx={{
                  bgcolor: "deepGray.main",
                  color: "whiteCustom.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 9,
                  borderRadius: 5,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  WebkitBackfaceVisibility: "hidden",
                  MozBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}>
                <CardContent>
                  <Link
                    style={{
                      display: "block",
                      textAlign: "center",
                    }}
                    to={"/apply-now"}>
                    <Button
                      sx={{
                        fontSize: { xs: 12, sm: 20, md: 30 },
                        borderRadius: 15,
                        py: 2,
                        px: { xs: 3, sm: 4, md: 5 },
                        bgcolor: "redCustom.main",
                        color: "#fff",
                        transition: "all 0.6s ease",
                        "&:hover": {
                          bgcolor: "btnHover.main",
                          transform: "scale(1.2)",
                        },
                      }}
                      variant="contained"
                      size="medium">
                      Apply Now{" "}
                      <ForwardIcon
                        sx={{ fontSize: { xs: 12, sm: 20, md: 30 } }}
                      />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductCategories;
