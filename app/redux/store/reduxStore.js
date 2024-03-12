import { configureStore } from "@reduxjs/toolkit";
import alertDialogSlice from "../slices/alertDialogSlice";

export const store = configureStore({
  reducer: {
    dialog: alertDialogSlice,
  },
});
