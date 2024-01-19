import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null,
    signupMessage: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state, action) {
      state.user = null;
      state.signupMessage = null;
    },
    signup(state, action) {
      state.signupMessage = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authReducer, authActions };
