import React from "react";
import swal from "sweetalert";

import AdminSidebar from "./AdminSidebar";

import "./tables.css";
import { Link } from "react-router-dom";

const UsersTable = () => {
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
        <h1 id="table-title">Users table</h1>
        <table>
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>
                  <div id="username-and-image">
                    <img src="/images/Investors 1.png" alt="user" />
                    <span>George</span>
                  </div>
                </td>
                <td>geo@gmail.com</td>
                <td>
                  <div id="table-btns-group">
                    <button className="btn">
                      <Link to={"/profile/1"}>View user</Link>
                    </button>
                    <button onClick={deleteTableItemHandler} className="btn btn-alt">
                      Delete User
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

export default UsersTable;
