import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomImage from "../../../lib/customImage";
import teamImg1 from "../../../public/assets/teamMember1.png";
import teamImg2 from "../../../public/assets/teamMember2.png";
import teamImg3 from "../../../public/assets/teamMember3.png";

const OurTeam = () => {
  return (
    <>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
          mt: { xs: 4, sm: 5, md: 8 },
        }}>
        Our{" "}
        <Typography
          component="span"
          variant="h2"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}>
          Team
        </Typography>
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          mt: 0.5,
          mb: { xs: 4, sm: 5, md: 6 },
        }}>
        <Grid item xs={12} sm={4} md={4}>
          <CustomImage
            src={teamImg1}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
            alt="company view"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CustomImage
            src={teamImg2}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
            alt="company view"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CustomImage
            src={teamImg3}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
            alt="company view"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default OurTeam;
