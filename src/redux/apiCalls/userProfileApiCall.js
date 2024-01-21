import { toast } from "react-toastify";
import { userProfileActions } from "../slices/userProfileSlice";
import { authActions } from "../slices/authSlice";
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
      dispatch(authActions.setUserProfilePhoto(response.data.profilePhoto));
      toast.success(response.data.message);

      const userData = JSON.parse(localStorage.getItem("userData"));
      userData.profilePhoto = response.data.profilePhoto;
      localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in uploadUserProfilePhoto: ${error}`);
    }
  };
}

export function updateUserProfile(userId, updatedProfile) {
  return async (dispatch, getState) => {
    try {
      const response = await BASE_URL.put(
        `/api/users/profile/${userId}`,
        updatedProfile,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(userProfileActions.updateUserProfile(response.data));
      dispatch(authActions.setUserProfileUsername(response.data.username));
      toast.success("profile updated successfully");

      const userData = JSON.parse(localStorage.getItem("userData"));
      userData.username = response.data.username;
      localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in updateUserProfile: ${error}`);
    }
  };
}
