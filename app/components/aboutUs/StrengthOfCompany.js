import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomImage from "../../../lib/customImage";
import img1 from "../../../public/assets/img1.jpg";
import img3 from "../../../public/assets/3.png";
import img4 from "../../../public/assets/4.png";
import img5 from "../../../public/assets/5.png";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const descriptionData = [
  {
    item: `Shenzhen EASTLONG Technology Co., Ltd. is the professional
manufacturer which focus on R&D, manufacturing and servicing
One-stop SMT/DIP production equipment solution and One-stop LCD
Module Automation equipment solution.`,
    icon: <InsertChartIcon sx={{ fontSize: 45, mb: 2 }} />,
  },
  {
    item: `EASTLONG Technology is committed to providing efficient service,
    cost effective and high quality one-stop automation production
    solutions. We sincerely invite every client to visit our company and
    build the long term friendship and cooperation.`,
    icon: <BusinessCenterIcon sx={{ fontSize: 45, mb: 2 }} />,
  },
  {
    item: `Our main products including Pick and Place Machine, Lead-free Reflow
Oven Machine, Lead-free Wave Soldering Machine, Fully Automatic
Printing Machine,Peripheral Equipment and LCD feeding machine, LCD
terminal cleaning machine, COG bonding machine, FOG bonding machine,
3 in1 dispensing machine, all kinds of non-stand equipment and
intelligent solution for the factory.`,
    icon: <DataThresholdingIcon sx={{ fontSize: 45, mb: 2 }} />,
  },
  {
    item: `EASTLONG Technology has more than 20 years industrial experience, we
provided professional Automation production equipment solutions for
many well -know enterprises at home and abroad, Such as Huawei, ZTE,
TCL, Hikvision, VIVO, TP-LINK, SKYWORTH, BOE, Huaxing, Tianma, etc.`,
    icon: <Diversity3Icon sx={{ fontSize: 45, mb: 2 }} />,
  },
];

const StrengthOfCompany = ({ colorMode }) => (
  <>
    <CustomImage
      src={img1}
      style={{
        marginTop: "8px",
        width: "100%",
        height: "auto",
        borderRadius: "5px",
      }}
      alt="company view"
    />
    <Grid
      container
      spacing={4}
      sx={{
        my: { xs: 4, sm: 5, md: 6 },
      }}>
      {descriptionData.map(({ item, icon }, index) => (
        <Grid item xs={12} sm={6} md={6} key={item}>
          <Box
            sx={{
              minHeight: 250,
              background:
                colorMode === "dark"
                  ? "linear-gradient(to right, #090E10, #5B6B7C)"
                  : "linear-gradient(to right, #c1c3c4, #ffffff00)",
              boxShadow: 3,
              mb: index != 3 && 2,
              borderRadius: 2,
              px: 3,
              py: 2,
            }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>{icon}</Box>
            <Typography
              paragraph
              sx={{
                textAlign: "justify",
              }}>
              {item}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
    <Typography
      component="h2"
      variant="h2"
      sx={{
        textAlign: "center",
        // mt: { xs: 4, sm: 5, md: 5 },
      }}>
      Factory{" "}
      <Typography
        component="span"
        variant="h2"
        sx={{
          color: (theme) =>
            colorMode === "light" ? "primary.main" : "primary.light",
        }}>
        Show
      </Typography>
    </Typography>
    <Grid
      container
      spacing={4}
      sx={{
        my: { xs: 4, sm: 5, md: 6 },
      }}>
      <Grid item xs={12} sm={4} md={4}>
        <CustomImage
          src={img3}
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
          src={img4}
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
          src={img5}
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

export default StrengthOfCompany;
