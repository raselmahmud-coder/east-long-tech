import React, { useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomImage from "../../../lib/customImage";
import courierServices from "../../../public/assets/OurExpressPartners.png";
import { sendContactForm } from "@/app/redux/slices/sendEmailSlice";
import GradientCircleProgress from "@/lib/GradientCircleProgress";

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.contact);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    dispatch(sendContactForm(formData));
    event.target.reset();
  };

  useEffect(() => {
    if (message || error) {
      setOpen(true);
    }
  }, [message, error]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      {(message || error) && (
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={error ? "warning.main" : "success"}
            variant="filled"
            sx={{ width: "100%" }}>
            {error
              ? error
              : "Successfully submitted, We will contact as soon as possible"}
          </Alert>
        </Snackbar>
      )}

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
        spacing={{ xs: 4, md: 15 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb: 15 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              required
              sx={{
                my: 2,
              }}
              name="name"
              label="Name"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
              }}
              name="email"
              label="Email"
              fullWidth
              variant="standard"
            />
            <TextField
              sx={{
                my: 2,
              }}
              name="phone"
              label="Phone"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
              }}
              name="message"
              label="Your Message"
              variant="standard"
              fullWidth
            />
            <Button disabled={loading} type="submit" variant="contained">
              {loading ? <GradientCircleProgress /> : "Submit"}
            </Button>
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
              unoptimized={true}
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
