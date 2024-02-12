import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {},
  reducers: {},
});

const reviewReducer = reviewSlice.reducer;
const reviewActions = reviewSlice.actions;

export { reviewReducer, reviewActions };
