import swal from "sweetalert";

import { HiPencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

import "./reviewsList.css";
import UpdateReview from "./UpdateReview";
import { useState } from "react";
const ReviewList = () => {
  const [updateReview, setUpdateReview] = useState(false);
  const deleteReviewHandler = () => {
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
    <div className="review-list">
      <h4 className="review-list-count">7 reviews</h4>
      {[1, 2].map((review) => (
        <div key={review} className="review-item">
          <div className="review-item-info">
            <div className="review-item-username">George Emad</div>
            <div className="review-item-time">14 hours ago</div>
          </div>
          <p className="review-item-text">Amazing dog</p>
          <div className="review-item-icons-wrapper">
            <div onClick={() => setUpdateReview(true)}>
              <HiPencilAlt size={22} />
            </div>
            <div onClick={deleteReviewHandler}>
              <AiFillDelete size={22} />
            </div>
          </div>
        </div>
      ))}
      {updateReview && <UpdateReview setUpdateReview={setUpdateReview} />}
    </div>
  );
};

export default ReviewList;
