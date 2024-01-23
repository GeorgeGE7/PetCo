import { useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import Moment from "react-moment";
import { HiPencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import UpdateReview from "./UpdateReview";

import "./reviewsList.css";
const ReviewList = ({ reviews }) => {
  const { singlePost } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

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
      <h4 className="review-list-count">{reviews?.length} Reviews</h4>
      {reviews?.map((review) => (
        <div key={review?._id} className="review-item">
          <div className="review-item-info">
            <div className="review-item-username">{review?.username}</div>
            <div className="review-item-time">
              <Moment fromNow ago>
                {review?.createdAt}
              </Moment>{" "}
              ago
            </div>
          </div>
          <p className="review-item-text">{review?.text}</p>
          {user?._id == review?.user && (
            <div className="review-item-icons-wrapper">
              <div onClick={() => setUpdateReview(true)}>
                <HiPencilAlt size={22} />
              </div>
              <div onClick={deleteReviewHandler}>
                <AiFillDelete size={22} />
              </div>
            </div>
          )}
        </div>
      ))}
      {updateReview && <UpdateReview setUpdateReview={setUpdateReview} />}
    </div>
  );
};

export default ReviewList;
