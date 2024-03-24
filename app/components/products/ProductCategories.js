import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import CustomImage from "../../../lib/customImage";
import { products } from "../../../lib/fakeData";

const ProductCategories = ({ mode: colorMode }) => {
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
                minHeight: { xs: "400px", sm: "480px", md: "480px" },
                transition: "transform 1s",
                transformStyle: "preserve-3d",
              }}>
              {/* Front side content */}
              <Card
                variant="elevation"
                sx={{
                  bgcolor:
                    colorMode === "dark" ? "deepGray.main" : "grey.400",
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
                      border: "1px",
                      borderStyle: "solid",
                      borderColor: "grey",
                      borderRadius: "15px",
                      width: 320,
                      height: "auto",
                      padding: "3px",
                      margin: "0 auto",
                      display: "flex",
                    }}
                    alt={title}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        px: 3,
                        textAlign: "center",
                        color:
                          colorMode === "dark" ? "text.primary" : "grey.100",
                      }}
                      component="h2"
                      variant="h5">
                      {title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              {/* Back side content */}
              <Card
                variant="elevation"
                sx={{
                  // bgcolor: "deepGray.main",
                  // color: "whiteCustom.main",
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
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}>
                  <Typography
                    variant="body1"
                    sx={{
                      px: 3,
                      textAlign: "justify",
                      mb: 3,
                    }}>
                    {description}
                  </Typography>
                  <a
                    href="#"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  
                  >
                    <Button
                      variant="contained"
                      sx={{
                        flexShrink: 0,
                      }}
                      size="large">
                      View Details{" "}
                      <ForwardIcon
                        sx={{ fontSize: { xs: 12, sm: 20, md: 22 } }}
                      />
                    </Button>
                  </a>
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
