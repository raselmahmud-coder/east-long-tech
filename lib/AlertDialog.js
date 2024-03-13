import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../app/redux/slices/alertDialogSlice";
import CloseIcon from "@mui/icons-material/Close";
import CustomImage from "./customImage";
import WeChatQR from "../public/assets/wechat-qr.png";
import WhatsAppQR from "../public/assets/whatsapp-qr.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog() {
  const { isOpen, showQRCode } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();
  console.log(showQRCode, "show me");
  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog">
        <Box
          sx={{
            backgroundColor: "primary.dark",
          }}>
          <DialogTitle sx={{ textAlign: "center", color: "grey.50" }}>
            Contact Us on {showQRCode}
          </DialogTitle>
          <DialogContent sx={{ display: "block", textAlign: "center" }}>
            <CustomImage
              src={showQRCode === "WhatsApp" ? WhatsAppQR : WeChatQR}
              style={{ width: "235px", height: "auto" }}
            />
            <DialogContentText
              variant="body2"
              sx={{
                color: "grey.50",
              }}>
              Open your {showQRCode} Account to Scan it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                color: "grey.50",
              }}
              onClick={handleClose}>
              <CloseIcon /> Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
