import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    addNewCategory(state, action) {
      state.categories.push(action.payload);
    },
    deleteACategory(state, action) {
      state.categories = state.categories.filter(
        (cate) => cate._id !== action.payload
      );
    },
  },
});

const categoryReducer = categorySlice.reducer;
const categoryActions = categorySlice.actions;

export { categoryReducer, categoryActions };
