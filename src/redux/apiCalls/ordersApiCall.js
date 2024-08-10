import { toast } from "react-toastify";
import { orderActions } from "../slices/ordersSlice";
import BASE_URL from "../../utils/request";
import { userCartActions } from "../slices/cartSlice";

export function createNewOrder(order) {
  return async (dispatch, getState) => {
    try {
      dispatch(orderActions.startLoading());
      const response = await BASE_URL.post(`/api/orders`, order, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(orderActions.startIsOrderCreated());
      toast.success(response.data.message);
      dispatch(userCartActions.removeItemFromCart(order));
      setTimeout(() => dispatch(orderActions.stopIsOrderCreated()), 700);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(orderActions.stopLoading());
      console.log(`error in createNewOrder: ${error}`);
    }
  };
}

export function getAllUserOrders(userId) {
  return async (dispatch, getState) => {
    dispatch(orderActions.startLoading());
    try {
      const response = await BASE_URL.get(`/api/orders/users/${userId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(orderActions.setOrders(response.data));
      dispatch(orderActions.stopLoading());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(orderActions.stopLoading());
      console.log(`error in getAllUserOrders: ${error}`);
    }
  };
}

// Admin
export function getAllAdminOrders() {
  return async (dispatch, getState) => {
    try {
      const response = await BASE_URL.get("/api/orders", {
        headers: { Authorization: "Bearer " + getState().auth.user.token },
      });
      dispatch(orderActions.setAdminOrders(response.data));
    } catch (error) {
      error.response.data.message && toast.error(error.response.data.message);
      console.log(`error in getAllAdminOrders: ${error}`);
    }
  };
}

export function updateOrderStatus(orderId, status) {
  return async (dispatch, getState) => {
    try {
      const response = await BASE_URL.put(
        `/api/orders/${orderId}`,
        { status },
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(orderActions.updateOrder(response.data?.order));
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`error in updateOrderStatus: ${error}`);
    }
  };
}
