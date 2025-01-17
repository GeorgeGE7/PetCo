import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";

import AdminSidebar from "./AdminSidebar";

import "./tables.css";
import { Link } from "react-router-dom";
import { postActions } from "../../redux/slices/postSlice";
import { getAllAdminOrders, updateOrderStatus } from "../../redux/apiCalls/ordersApiCall";
import { getSinglePost } from "../../redux/apiCalls/postsApiCall";
import Order from "./order";

const OrdersTable = () => {
  const { adminOrders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
    dispatch(getAllAdminOrders());
  }, []);
  const handleStatusChange = (id, status) => {
    dispatch(updateOrderStatus(id, status))
  };
  return (
    <main id="admin-main-table">
      <AdminSidebar />
      <div id="table-container">
        <h1 id="table-title">order table</h1>
        <table>
          <thead>
            <tr>
              <th>Count</th>
              <th>product</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminOrders?.map((item, index) => (
              <Order
                key={item._id}
                item={item}
                index={index}
                handleStatusChange={handleStatusChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrdersTable;
