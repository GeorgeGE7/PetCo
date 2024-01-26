import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import swal from "sweetalert";

import AdminSidebar from "./AdminSidebar";

import "./tables.css";
import { Link } from "react-router-dom";
import { postActions } from "../../redux/slices/postSlice";

const OrdersTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
  }, []);
  const deleteTableItemHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Review has been deleted!", {
          icon: "success",
        });
      } else {
        swal("No changes happened");
      }
    });
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
              <th>Address</th>
              <th>Post title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>
                  <div id="username-and-image">
                    <span>El order</span>
                  </div>
                </td>
                <td>el mfrod da 3nwan el order</td>
                <td>
                  <div id="table-btns-group">
                    <button className="btn">
                      <Link to={`/posts/details/${item._id}`}>Contact</Link>
                    </button>
                    <button
                      onClick={deleteTableItemHandler}
                      className="btn btn-alt"
                    >
                      Status
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrdersTable;
