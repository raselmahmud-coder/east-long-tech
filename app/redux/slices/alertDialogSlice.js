// dialogSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  showQRCode: "",
};

const alertDialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action) => {
      state.isOpen = true;
      state.showQRCode = action.payload;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = alertDialogSlice.actions;
export default alertDialogSlice.reducer;
