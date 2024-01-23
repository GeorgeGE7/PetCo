import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    singlePost: null,
    userLikeProducts: [],
    postsCount: null,
    postsCategory: [],
    loading: false,
    isPostCreated: false,
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setSinglePost(state, action) {
      state.singlePost = action.payload;
    },
    setPostsCount(state, action) {
      state.postsCount = action.payload;
    },
    setPostsCategory(state, action) {
      state.postsCategory = action.payload;
    },
    setSinglePostLike(state, action) {
      state.singlePost.likes = action.payload.likes;
    },
    setUserLikedProducts(state, action) {
      state.userLikeProducts = action.payload;
    },
    startLoading(state, action) {
      state.loading = true;
    },
    stopLoading(state, action) {
      state.loading = false;
    },
    startIsPostCreated(state) {
      state.isPostCreated = true;
      state.loading = false;
    },
    stopIsPostCreated(state) {
      state.isPostCreated = false;
    },
  },
});

const postReducer = postSlice.reducer;
const postActions = postSlice.actions;

export { postReducer, postActions };
