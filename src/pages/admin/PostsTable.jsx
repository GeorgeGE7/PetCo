import React from "react";
import swal from "sweetalert";

import AdminSidebar from "./AdminSidebar";

import {posts} from "../../dummyData"

import "./tables.css";
import { Link } from "react-router-dom";

const PostsTable = () => {
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
        <h1 id="table-title">Products table</h1>
        <table>
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Product title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div id="username-and-image">
                    <img src="/images/Investors 1.png" alt="user" />
                    <span>{item.user.username}</span>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>
                  <div id="table-btns-group">
                    <button className="btn">
                      <Link to={`/posts/details/${item._id}`}>View product</Link>
                    </button>
                    <button onClick={deleteTableItemHandler} className="btn btn-alt">
                      Delete product
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

export default PostsTable;
