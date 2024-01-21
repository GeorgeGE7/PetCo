import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userProfile: null,
  },
  reducers: {
    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },
    setUserProfilePhoto(state, action) {
      state.userProfile.profilePhoto = action.payload;
    },
    updateUserProfile(state, action) {
      state.userProfile = action.payload;
    },
  },
});

const userProfileReducer = userProfileSlice.reducer;
const userProfileActions = userProfileSlice.actions;

export { userProfileReducer, userProfileActions };
