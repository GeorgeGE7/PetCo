import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { userProfileReducer } from "./slices/userProfileSlice";
import { postReducer } from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
    post: postReducer,
  },
});

export default store;
