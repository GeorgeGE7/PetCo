import axios from "axios";
import { toast } from "react-toastify";
import { authActions } from "../slices/authSlice";
import BASE_URL from "../../utils/request";

export function loginUser(user) {
  return async (dispatch) => {
    try {
      const response = await BASE_URL.post("/api/auth/login", user);
      dispatch(authActions.login(response.data));
      localStorage.setItem("userData", JSON.stringify(response.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in loginUser: ${error}`);
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("userData");
  };
}
