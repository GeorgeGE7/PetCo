import { useState } from "react";
import { toast } from "react-toastify";

import "./updateReview.css";

const UpdateReview = ({ setUpdateReview }) => {
  const [review, setReview] = useState("This is comment");

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (review.trim() === "") return toast.error("Can not be empty");
  };

  return (
    <div className="update-review">
      <form onSubmit={formSubmitHandler} className="update-review-form">
        <abbr title="close">
          <span
            onClick={() => setUpdateReview(false)}
            className="update-review-form-close"
          >
            X
          </span>
        </abbr>
        <h1 className="update-review-h1">Edit review</h1>
        <textarea
          type="text"
          rows={1}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="update-review-input"
        />
        <button className="btn" type="submit">
          Edit review
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
