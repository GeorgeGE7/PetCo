import React from "react";
import AdminSidebar from "./AdminSidebar";

import "./tables.css";
import { Link } from "react-router-dom";

const UsersTable = () => {
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
                    <button className="btn btn-alt">
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
