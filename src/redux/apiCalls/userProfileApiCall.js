import axios from "axios";
import { toast } from "react-toastify";
import { userProfileActions } from "../slices/userProfileSlice";
import BASE_URL from "../../utils/request";

export function getUserProfile(userId) {
  return async (dispatch) => {
    try {
      const response = await BASE_URL.get(`/api/users/profile/${userId}`);
      dispatch(userProfileActions.setUserProfile(response.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in getUserProfile: ${error}`);
    }
  };
}

export function uploadUserProfilePhoto(photo) {
  return async (dispatch, getState) => {
    try {
      const response = await BASE_URL.post(
        `/api/users/profile/upload-profile-photo`,
        photo,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(
        userProfileActions.setUserProfilePhoto(response.data.profilePhoto)
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in getUserProfile: ${error}`);
    }
  };
}
