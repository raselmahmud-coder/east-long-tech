import * as React from "react";
import Box from "@mui/material/Box";
import CustomImage from "@/lib/customImage";
import image from "@/public/assets/pod.png";
import image2 from "@/public/assets/prod2.avif";

export default function Hero({ mode }) {
  return (
    <Box>
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
