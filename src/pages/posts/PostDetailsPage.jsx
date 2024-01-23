import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { posts } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";

import {
  getSinglePost,
  togglePostLike,
} from "../../redux/apiCalls/postsApiCall";
import AddReview from "../../components/reviews/AddReview";
import ReviewList from "../../components/reviews/ReviewsList";

import "./postDetails.css";

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const { singlePost } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [id]);

  return (
    <main>
      <section className="post-details">
        <div className="post-details-image-wrapper">
          <img
            className="post-details-image"
            src={singlePost?.image?.url}
            alt={singlePost?.title}
          />
          <div>
            <h1 className="post-detials-title">{singlePost?.title}</h1>
            <div id="btns-container">
              {user && (
                <div
                  style={{ textAlign: "center", marginBottom: "0.7rem" }}
                  className="btn btn-alt"
                  to={`/post/details/${singlePost?._id}`}
                  onClick={() => dispatch(togglePostLike(singlePost?._id))}
                >
                  <p>{(singlePost?.likes)?.length}</p>
                  <FaStar style={{ marginRight: "0.37rem" }} size={17} />
                  <FaRegStar style={{ marginRight: "0.37rem" }} size={17} />
                  Add to cart
                </div>
              )}
              <Link
                className="btn btn-alt"
                to={`/post/details/${singlePost?._id}`}
              >
                <FaStar style={{ marginRight: "0.37rem" }} size={17} />
                <FaRegStar style={{ marginRight: "0.37rem" }} size={17} />
                Add to cart
              </Link>
              <Link
                className="btn seconde"
                to={`/posts/details/${singlePost?._id}`}
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
        <p className="post-details-content">{singlePost?.content}</p>
        <AddReview />
        <ReviewList reviews={singlePost?.comments} />
      </section>
    </main>
  );
};

export default PostDetailsPage;
