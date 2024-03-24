import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CustomImage from "../../../lib/customImage";
import whiteLogo from "../../../public/assets/white-logo.png";
import blackLogo from "../../../public/assets/black-logo.png";
import { hotProductsCollection } from "../../../lib/fakeData";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button variant="contained" {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: "all 0.5s",
  "& .MuiSvgIcon-root": {
    transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

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
    if (id === expanded.id) {
      setExpanded({ isExpanded: !expanded.isExpanded, id: id });
    } else {
      setExpanded({ isExpanded: true, id: id });
    }
  };
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 8,
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
      <Grid container spacing={5}>
        {hotProductsCollection.map(
          ({ id, title, description, details, image }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card
                sx={{
                  bgcolor: mode === "dark" ? "grey.800" : "grey.400",
                  // minHeight: { xs: "auto", sm: "880px", md: "880px" },
                }}>
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
                  <Typography>
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
                  <Typography variant="h5" sx={{ my: 2, textAlign: "center" }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "justify",
                    }}
                    color="text.secondary">
                    {description.slice(0, 120)}...
                  </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ pt: 1 }}>
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
                  <ExpandMore
                    expand={expanded.isExpanded && id === expanded.id}
                    onClick={() => handleExpandClick(id)}
                    aria-expanded={expanded.isExpanded}
                    aria-label="show more">
                    <FileDownloadIcon />
                    {expanded.isExpanded && id === expanded.id
                      ? "Close Me"
                      : "View Details"}
                  </ExpandMore>
                </CardActions>
                <Collapse
                  in={expanded.isExpanded && id === expanded.id}
                  timeout="auto"
                  unmountOnExit>
                  <CardContent>
                    <Typography>{details}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ),
        )}
      </Grid>
    </>
  );
};

export default HotProductsPresent;
