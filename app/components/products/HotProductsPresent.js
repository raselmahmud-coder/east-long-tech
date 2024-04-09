import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CustomImage from "../../../lib/customImage";
import whiteLogo from "../../../public/assets/white-logo.png";
import blackLogo from "../../../public/assets/black-logo.png";
import { hotProductsCollection } from "../../../lib/fakeData";
import bgImage from "@/public/assets/bgImages/bgImg.png";

const HotProductsPresent = ({ mode }) => {
  const [favorites, setFavorites] = React.useState([]);

  const handleFavoriteClick = (id) => {
    const isFavorite = favorites.includes(id);
    if (isFavorite) {
      const updatedFavorites = favorites.filter((favId) => favId !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, id];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };
  React.useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [favorites.length]);

  const [expanded, setExpanded] = React.useState({
    isExpanded: false,
    id: null,
  });

  const handleExpandClick = (id) => {
    window.open(
      "https://eastlong.en.alibaba.com/productgrouplist-936782974/SMT_Reflow_Oven.html?spm=a2700.shop_index.11406.3.88cb7391KHt5l3",
      "_blank",
    );
  };
  return (
    <Box
      sx={{
        background: `url(${bgImage.src})`,
      }}>
      <Typography
        id="products"
        component="h1"
        variant="h2"
        sx={{
          textAlign: "center",
          pt: 3,
          mb: 8,
          color: mode == "dark" ? "primary.main" : "grey.50",
        }}>
        Hot Products&nbsp;
        <Typography
          component="span"
          variant="h2"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}>
          Presentation
        </Typography>
      </Typography>
      <Grid container spacing={3} sx={{ px: 1, pb: 3 }}>
        {hotProductsCollection.map(
          ({ id, title, description, details, image }) => (
            <Grid item xs={12} sm={4} md={3} key={id}>
              <Card
                sx={{
                  bgcolor:
                    mode === "dark"
                      ? "grey.800"
                      : "linear-gradient(0deg, #f3f3f3, #fffdfa)",
                  minHeight: { xs: "auto", sm: "515px", md: "515px" },
                  display: "flex", // Enables flex layout
                  flexDirection: "column", // Stacks children vertically
                  height: "100%", // Makes card stretch to full height of the grid item
                }}>
                <Box flexGrow={1}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      py: 3,
                    }}>
                    <CustomImage
                      src={mode === "dark" ? whiteLogo : blackLogo}
                      style={{ width: "120px", height: "auto" }} //these logo need to export small size 70X40
                    />
                    <Typography variant="body1">
                      Shenzhen Eastlong Technology Co., Ltd.
                    </Typography>
                  </Box>
                  <CustomImage
                    src={image}
                    blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
                    style={{
                      width: "70%",
                      height: "auto",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{ mt: 2, textAlign: "center", fontWeight: 530 }}>
                      {title}
                    </Typography>
                  </CardContent>
                </Box>
                <CardActions
                  disableSpacing
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                  }}>
                  <IconButton
                    onClick={() => handleFavoriteClick(id.toString())}
                    aria-label="add to favorites"
                    title="Make favorite">
                    <FavoriteIcon
                      sx={{
                        color: favorites.map(
                          (ids) => ids == id.toString() && "primary.main",
                        ),
                      }}
                    />
                  </IconButton>
                  <Button
                    sx={{
                      
                      backgroundColor: "grey.900",
                      color: "#FFF0F0",
                      background: "#212930",
                      backgroundImage:
                        "linear-gradient(to bottom, #2c2d2d, #212930)",
                    }}
                    variant="contained"
                    title="Click here to show more">
                    <ArrowOutwardIcon sx={{
                      fontSize:18
                    }}/>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
};

export default HotProductsPresent;
