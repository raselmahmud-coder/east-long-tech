"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CustomImage from "../../../lib/customImage";
import { useSelector } from "react-redux";
import whiteLogo from "../../../public/assets/white-logo.png";
import blackLogo from "../../../public/assets/black-logo.png";
import machine1 from "../../../public/assets/5.SMT Pick and Place Machine RS-1R.jpg";
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

const HotProductsPresent = () => {
  const [expanded, setExpanded] = React.useState({
    isExpanded: false,
    id: null,
  });
  const { colorMode } = useSelector((state) => state.colorMode);

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
        variant="h1"
        sx={{
          textAlign: "center",
          my: 2,
        }}>
        Hot Products&nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}>
          Presentation
        </Typography>
      </Typography>
      <Grid container spacing={3}>
        {hotProductsCollection.map(
          ({ id, title, description, details, image }) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Card sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 3,
                  }}>
                  <CustomImage
                    src={colorMode === "dark" ? whiteLogo : blackLogo}
                    style={{ width: "70px", height: "40px" }} //these logo need to export small size 70X40
                  />
                  <Typography>
                    Shenzhen Eastlong Technology Co., Ltd.
                  </Typography>
                </Box>
                <CustomImage
                  src={machine1}
                  width={350}
                  height={300}
                  blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
                  //   style={{ width: "300px", height: "auto", margin: "auto" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded.isExpanded && id === expanded.id}
                    onClick={() => handleExpandClick(id)}
                    aria-expanded={expanded.isExpanded}
                    aria-label="show more">
                    <FileDownloadIcon />
                    {expanded.isExpanded && id === expanded.id ? "Close Me" : "View Details"}
                  </ExpandMore>
                </CardActions>
                <Collapse
                  in={expanded.isExpanded && id === expanded.id}
                  timeout="auto"
                  unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
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
