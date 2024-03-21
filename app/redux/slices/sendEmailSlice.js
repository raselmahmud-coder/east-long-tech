import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendContactForm = createAsyncThunk(
  'contact/sendContactForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData; 
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  reducers: {
    // Reducer logic here
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message; // Assuming a message is part of the response
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = "There was an error occurred!"; // Error message is captured here
      });
  },
});

export default contactSlice.reducer;
