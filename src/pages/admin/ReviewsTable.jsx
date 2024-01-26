import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import swal from "sweetalert";

import AdminSidebar from "./AdminSidebar";
import { postActions } from "../../redux/slices/postSlice";

const ReviewsTable = () => {
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
        <h1 id="table-title">Reviews table</h1>
        <table>
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5,6].map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td>
                  <div id="username-and-image">
                    <img src="/images/Investors 1.png" alt="user" />
                    <span>Ay asm ay asm</span>
                  </div>
                </td>
                <td>d el mfrood Review</td>
                <td>
                  <div id="table-btns-group">
                    <button onClick={deleteTableItemHandler} className="btn btn-alt">
                      Delete Review
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

export default ReviewsTable;
