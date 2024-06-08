import { toast } from "react-toastify";
import { postActions } from "../slices/postSlice";
import BASE_URL from "../../utils/request";

export function getAllPosts(searchQuery) {
  return async (dispatch) => {
    if (!searchQuery) {
      dispatch(postActions.startLoading());
    }
    try {
      if (searchQuery) {
        const response = await BASE_URL.get(`/api/posts?search=${searchQuery}`);
        dispatch(postActions.setPosts(response.data));
      } else {
        const response = await BASE_URL.get("/api/posts");
        dispatch(postActions.setPosts(response.data));
      }
      dispatch(postActions.stopLoading());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.stopLoading());
      console.log(`error in getAllPosts: ${error}`);
    }
  };
}

export function getSinglePost(postId) {
  return async (dispatch) => {
    dispatch(postActions.startLoading());
    try {
      const response = await BASE_URL.get(`/api/posts/${postId}`);
      dispatch(postActions.setSinglePost(response.data.post));
      dispatch(postActions.stopLoading());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.stopLoading());
      console.log(`error in getSinglePost: ${error}`);
    }
  };
}

export function togglePostLike(postId) {
  return async (dispatch, getState) => {
    try {
      const response = await BASE_URL.put(
        `/api/posts/likes/${postId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(postActions.setSinglePostLike(response.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in togglePostLike: ${error}`);
    }
  };
}

export function getCategoryPosts(category) {
  return async (dispatch) => {
    dispatch(postActions.startLoading());
    try {
      const response = await BASE_URL.get(`/api/posts?category=${category}`);
      dispatch(postActions.setPostsCategory(response.data));
      dispatch(postActions.stopLoading());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.stopLoading());
      console.log(`error in getAllPosts: ${error}`);
    }
  };
}

export function getUserLikedProducts(id) {
  return async (dispatch, getState) => {
    try {
      const response = await BASE_URL.get(`/api/posts/user/likes/${id}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.setUserLikedProducts(response.data));
      // console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in getUserLikedProducts: ${error}`);
    }
  };
}

export function createPost(post) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.startLoading());
      const response = await BASE_URL.post(`/api/posts`, post, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(postActions.startIsPostCreated());
      toast.success("Product created successfully");
      setTimeout(() => dispatch(postActions.stopIsPostCreated()), 1700);
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.stopLoading());
      console.log(`error in createPost: ${error}`);
    }
  };
}

export function updatePost(postId, post) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.startLoading());
      const response = await BASE_URL.put(`/api/posts/${postId}`, post, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(postActions.startIsPostCreated());
      dispatch(postActions.setSinglePost(response.data.updatedPost));
      toast.success("Product updated successfully");
      setTimeout(() => dispatch(postActions.stopIsPostCreated()), 1700);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(postActions.stopLoading());
      console.log(`error in createPost: ${error}`);
    }
  };
}

export function getPostsCount() {
  return async (dispatch, getState) => {
    try {
      const response = await BASE_URL.get(`/api/posts/count`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.setPostsCount(response.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in getPostsCount: ${error}`);
    }
  };
}
export function deleteSinglePost(id) {
  return async (dispatch, getState) => {
    dispatch(postActions.startLoading());
    try {
      const response = await BASE_URL.delete(`/api/posts/${id}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.deletePost(id));
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in deletePost: ${error}`);
    }
  };
}
