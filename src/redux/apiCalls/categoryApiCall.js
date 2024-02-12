import { toast } from "react-toastify";
import { categoryActions } from "../slices/categorySlice";
import BASE_URL from "../../utils/request";

export function getAllCategories() {
  return async (dispatch) => {
    try {
      const response = await BASE_URL.get("/api/categories");
      dispatch(categoryActions.setCategories(response.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in getAllCategories: ${error}`);
    }
  };
}
