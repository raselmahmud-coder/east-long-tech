import CustomImage from "@/lib/customImage";
import { Box } from "@mui/material";
import React from "react";

const ProductFeatured = ({ mode, image }) => {
  return (
    <Box sx={{mt:5}}>
      <CustomImage
        src={image}
        blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
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
};

export default ProductFeatured;
