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
import image from "@/public/assets/bgImages/bg2.png"

export default function Features({ mode }) {


  return (
    <Box sx={{ py: { xs: 5, sm: 6 } }}>
      <CustomImage
        src={image}
        alt="carousel img"
        style={{
          width: "100%",
          height: "auto",
          cursor: "pointer",
          margin: "0px",
          padding: "0px",
        }}
        onClick={() =>
          window.open(
            "https://eastlong.en.alibaba.com/productlist.html?spm=a2700.shop_index.88.15",
            "_blank",
          )
        }
      />
      
    </Box>
  );
}
