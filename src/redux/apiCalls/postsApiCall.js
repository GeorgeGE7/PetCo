import { toast } from "react-toastify";
import { postActions } from "../slices/postSlice";
import BASE_URL from "../../utils/request";

export function getAllPosts(searchQuery) {
  return async (dispatch) => {
    try {
      if (searchQuery) {
        const response = await BASE_URL.get(`/api/posts?search=${searchQuery}`);
        dispatch(postActions.setPosts(response.data));
      } else {
        const response = await BASE_URL.get("/api/posts");
        dispatch(postActions.setPosts(response.data));
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in getAllPosts: ${error}`);
    }
  };
}

export function getCategoryPosts(category) {
  return async (dispatch) => {
    try {
      const response = await BASE_URL.get(`/api/posts?category=${category}`);
      dispatch(postActions.setPostsCategory(response.data));
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in getAllPosts: ${error}`);
    }
  };
}
