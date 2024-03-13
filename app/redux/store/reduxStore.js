import { configureStore } from "@reduxjs/toolkit";
import alertDialogSlice from "../slices/alertDialogSlice";
import colorModeSlice from "../slices/colorModeSlice";

export const store = configureStore({
  reducer: {
    colorMode: colorModeSlice,
    dialog: alertDialogSlice,
  },
});
