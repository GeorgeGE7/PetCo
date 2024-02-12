import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { userProfileReducer } from "./slices/userProfileSlice";
import { postReducer } from "./slices/postSlice";
import { userCartReducer } from "./slices/cartSlice";
import { orderReducer } from "./slices/ordersSlice";
import { categoryReducer } from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
    post: postReducer,
    cart: userCartReducer,
    order: orderReducer,
    category: categoryReducer,
  },
});

export default store;
