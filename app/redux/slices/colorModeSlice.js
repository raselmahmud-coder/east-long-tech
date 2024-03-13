import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  colorMode: "dark",
};
const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.colorMode = action.payload.colorMode;
    },
  },
});
export const { setColorMode } = colorModeSlice.actions;
export default colorModeSlice.reducer;
