"use client";
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
import { sendContactForm } from "@/app/redux/slices/sendEmailSlice";
import GradientCircleProgress from "@/lib/GradientCircleProgress";
import Visibility from "@mui/icons-material/Visibility";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";

const ContactUs = ({ mode }) => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.contact);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    dispatch(sendContactForm(formData));
    // event.target.reset();
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
  // console.log(error, "conact us form");
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
            severity={error ? "error" : "success"}
            variant="filled"
            sx={{ width: "100%" }}>
            {error
              ? error
              : "Successfully submitted, We will contact as soon as possible"}
          </Alert>
        </Snackbar>
      )}

      <Typography
        id="contact-us"
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
          my: 2,
        }}>
        Contact{" "}
        <Typography
          component="span"
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
        <Grid item xs={12} sm={12} md={12}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: { md: "50%" }, mx: "auto" }}>
            <TextField
              focused
              required
              sx={{
                my: 2,
                "& .MuiOutlinedInput-root": {
                  // Increase the specificity for the pseudo-class
                  "&.Mui-focused fieldset": {
                    borderColor: "#6b1515", // Your desired color
                    borderWidth: "2px",
                  },
                },
              }}
              name="name"
              placeholder="Type Your Name"
              fullWidth
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "grey.900",
                  }}>
                  Full Name
                  <PermIdentityIcon />
                </Box>
              }
            />
            <TextField
              focused
              required
              sx={{
                my: 2,
                "& .MuiOutlinedInput-root": {
                  // Increase the specificity for the pseudo-class
                  "&.Mui-focused fieldset": {
                    borderColor: "#6b1515", // Your desired color
                    borderWidth: "2px",
                  },
                },
              }}
              name="email"
              placeholder="Type Your Valid Email"
              fullWidth
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "grey.900",
                  }}>
                  Your Email
                  <MailIcon />
                </Box>
              }
            />
            <TextField
              placeholder="Type Your Phone"
              focused
              sx={{
                my: 2,
                "& .MuiOutlinedInput-root": {
                  // Increase the specificity for the pseudo-class
                  "&.Mui-focused fieldset": {
                    borderColor: "#6b1515", // Your desired color
                    borderWidth: "2px",
                  },
                },
              }}
              name="phone"
              fullWidth
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "grey.900",
                  }}>
                  Phone
                  <PhoneIcon />
                </Box>
              }
            />
            <TextField
              focused
              required
              sx={{
                my: 2,
                "& .MuiOutlinedInput-root": {
                  // Increase the specificity for the pseudo-class
                  "&.Mui-focused fieldset": {
                    borderColor: "#6b1515", // Your desired color
                    borderWidth: "2px",
                  },
                },
              }}
              name="message"
              placeholder="Please write here full message"
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "grey.900",
                  }}>
                  Your Message
                  <MessageIcon />
                </Box>
              }
              fullWidth
            />
            <Button
              sx={{ width: "30%", fontWeight:"bold" }}
              disabled={loading}
              type="submit"
              variant="contained">
              {loading ? (
                <GradientCircleProgress />
              ) : (
                <>
                  Submit
                  <SendIcon sx={{ml:2}} />
                </>
              )}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
