import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { brandQuality } from "@/lib/fakeData";
import { Divider } from "@mui/material";
import Head from "next/head";

export default function Highlights({ mode }) {
  const metadata = {
    title: "High light Us",
    description: "Learn more about what we do and who we are.",
  };
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Box
        id="highlights"
        sx={{
          // pt: { xs: 0, sm: 12 },
          pb: { xs: 8, sm: 16 },
          // color: "white",
          // backgroundImage:
          //   mode === "light"
          //     ? "linear-gradient(180deg, #002d56, #FFF)"
          //     : `linear-gradient(#02294F, ${alpha("#090E10", 0.5)})`,
          // backgroundSize: "100% 30%",
          // backgroundRepeat: "no-repeat",
        }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, sm: 4 },
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              mt: 2,
            }}>
            <Typography
              component="h2"
              variant="h2"
              color="text.primary"
              sx={{
                textAlign: "center",
              }}>
              Why Choose Us?
            </Typography>
            <Divider
              variant="middle"
              sx={{
                borderTop: `2px solid ${mode === "dark" ? "red" : "black"}`,
                width: { xs: 200, sm: 300, md: 450 },
                mx: "auto",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              width: "50%",
              color: mode == "dark" ? "primary.main" : "grey.900",
            }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
          <Grid container spacing={5}>
            {brandQuality.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                    bgcolor: mode === "light" ? "grey.900" : "grey.700",
                    color: "grey.50",
                    boxShadow: 9,
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    {item.icon}
                    <Typography fontWeight="bold" variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ textAlign: "justify" }}>
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
