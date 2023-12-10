import { useState } from "react";
import { toast } from "react-toastify";
import "./addReview.css";

const AddReview = () => {
  const [review, setReview] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (review.trim() == "") {
      return toast.error("Can not post an empty review");
    }
    console.log(review);
    setReview("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <textarea
        rows={1}
        type="text"
        placeholder="Add a review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button className="btn">Add review</button>
    </form>
  );
};

export default AddReview;
