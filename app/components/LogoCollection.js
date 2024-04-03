import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomImage from "../../lib/customImage";
import huawei from "@/public/assets/company_logo/1.png";
import tpLink from "@/public/assets/company_logo/2.png";
import vivo from "@/public/assets/company_logo/3.png";
import SKYWORTH from "@/public/assets/company_logo/4.png";
import BOE from "@/public/assets/company_logo/5.png";
import tianam from "@/public/assets/company_logo/6.png";
import Hikvision from "@/public/assets/company_logo/Hikvision-Logo.png";
import { keyframes } from "@emotion/react";

const Logos = [huawei, tpLink, vivo, SKYWORTH, BOE, tianam, Hikvision];

const slide = keyframes`
to {
  right: 100%;
  transform: translate(0);
}
`;

export default function LogoCollection({ mode }) {
  return (
    <>
      <Box id="logoCollection" sx={{ py: 4, mb: { xs: 8, md: 18 } }}>
        <Typography sx={{ mb: 4 }} component="h2" variant="h2" align="center">
          Trusted by many Companies
        </Typography>
        <Box
          sx={{
            margin: "auto",
            overflow: "hidden",
            "&:hover .logos-slide": {
              animationPlayState: "paused",
            },
          }}>
          <Box
            className="logos-slide"
            sx={{
              position: "relative",
              display: "flex",
              right: "0",
              transform: "translate(100%)",
              marginLeft: "-160vw",
              animation: `${slide} 60s linear infinite 0s`,
            }}>
            {Logos.map((logo, index) => (
              <CustomImage
                key={index}
                blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
                src={logo}
                alt={`company logo`}
                style={{ width: 250, height: "auto", margin: "0 40px" }}
              />
            ))}
            {Logos.map((logo, index) => (
              <CustomImage
                key={index}
                blurDataURL={`https://placehold.co/600x400/EEE/31343C`}
                src={logo}
                alt={`company logo`}
                style={{ width: 250, height: "auto", margin: "0 40px" }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
