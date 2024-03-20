import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
// import { useAddFreeConsultationMutation } from "../../redux/feature/FreeConsultation/FreeConsultationAPI";
// import PositionedSnackbar from "../../globalsComponents/PositionSnakBar";
import { useSelector } from "react-redux";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import CustomImage from "../../../lib/customImage";
// import courierServices from "../../../public/assets/courier-services.jpg";
import courierServices from "../../../public/assets/OurExpressPartners.png";

const ContactUs = () => {
  //   const { isDarkMode } = useSelector((state) => state.colorMode);
  /*  const [
    addFreeConsultation,
    { isError, isLoading, data: consultationData, isSuccess },
  ] = useAddFreeConsultationMutation(); */

  const handleConsultationForm = async (even) => {
    even.preventDefault();
    const name = even.target[0].value;
    const email = even.target[1].value;
    const phone = even.target[2].value;
    const message = even.target[3].value;
    const data = {
      name,
      email,
      phone,
      message,
    };
    await addFreeConsultation(data);
    even.target[0].value = "";
    even.target[1].value = "";
    even.target[2].value = "";
    even.target[3].value = "";
  };

  return (
    <>
      {/* {consultationData?.id && isSuccess && (
          <PositionedSnackbar severity={"success"} isOpen={true} />
      )} */}
      {/*  {isError && (
         <PositionedSnackbar
         severity={"warning"}
         message={"There is an error, try again later"}
         isOpen={true}
         />
        )} */}
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
          my: 2,
        }}>
        Contact{" "}
        <Typography
          component="Typography"
          variant="h2"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}>
          Us
        </Typography>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb: 15 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box component="form" onSubmit={handleConsultationForm}>
            <TextField
              required
              sx={{
                my: 2,
                // color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              id="standard-basic"
              label="Name"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
                // color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              id="standard-basic"
              label="Email"
              fullWidth
              variant="standard"
            />
            <TextField
              sx={{
                my: 2,
                // color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              id="standard-basic"
              label="Phone"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
                // color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              id="standard-basic"
              label="Your Message"
              variant="standard"
              fullWidth
            />
            {/* <Button disabled={isLoading} type="submit" variant="contained">
              {isLoading ? <CircularProgress color="success" /> : "Submit"}
            </Button> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {/* <HeadingH4 HeadingH4Text={"Direct Phone Call"} /> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            //   my: 4,
            }}>
            <CustomImage
              src={courierServices}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5px",
              }}
              alt="company awards"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
