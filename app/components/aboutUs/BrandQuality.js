import React from "react";
import { Box, Grid, Stack, Typography, Card } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import CustomImage from "../../../lib/customImage";
import cer1 from "../../../public/assets/cer1.png";
import cer2 from "../../../public/assets/cer2.png";
import award from "../../../public/assets/awards.png";

const items = [
  {
    icon: (
      <BusinessCenterIcon
        sx={{
          fontSize: { xs: 28, md: 40 },
        }}
      />
    ),
    title: "20+ Years of Production experience",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: (
      <SupportAgentIcon
        sx={{
          fontSize: { xs: 28, md: 40 },
        }}
      />
    ),
    title: "7*24 Hour online service",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: (
      <PeopleOutlineIcon
        sx={{
          fontSize: { xs: 28, md: 40 },
        }}
      />
    ),
    title: "Training 500+ Experts & Technician",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: (
      <PrecisionManufacturingIcon
        sx={{
          fontSize: { xs: 28, md: 40 },
        }}
      />
    ),
    title: "Building 100+ New Factories For Customers",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
];
const BrandQuality = ({ colorMode }) => {
  return (
    <>
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={1}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Stack
                  direction="column"
                  color="inherit"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={{
                    p: 3,
                    height: "100%",
                    border: "1px solid",
                    borderColor: "grey.800",
                    background: "transparent",
                    backgroundColor: "grey.900",
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    {item.icon}
                    <Typography fontWeight="medium" gutterBottom>
                      {item.title}
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: "grey.300", textAlign:"justify" }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CustomImage
                src={cer1}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                }}
                alt="company strength"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomImage
                src={cer2}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                }}
                alt="company strength"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomImage
                src={award}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                }}
                alt="company awards"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BrandQuality;
