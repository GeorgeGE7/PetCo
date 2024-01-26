import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { posts } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoCartSharp, IoCartOutline } from "react-icons/io5";

import {
  getSinglePost,
  togglePostLike,
} from "../../redux/apiCalls/postsApiCall";
import AddReview from "../../components/reviews/AddReview";
import ReviewList from "../../components/reviews/ReviewsList";

import "./postDetails.css";
import { userCartActions } from "../../redux/slices/cartSlice";
import { postActions } from "../../redux/slices/postSlice";

const PostDetailsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
  }, []);

  const { singlePost } = useSelector((state) => state.post);
  const { userCart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [id]);

  const [existInCart, setExistInCart] = useState(false);

  useEffect(() => {
    const existingItem = userCart.find((i) => i._id === id);
    if (existingItem) {
      setExistInCart(true);
    } else {
      setExistInCart(false);
    }
  }, [userCart, id]);

  const handleAddToCart = () => {
    dispatch(userCartActions.handleCartAddOrRemove(singlePost));
    // console.log(userCart);
  };

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
                  onClick={() => dispatch(togglePostLike(singlePost?._id))}
                >
                  {singlePost?.likes?.includes(user?._id) ? (
                    <>
                      <FaStar style={{ marginRight: "0.37rem" }} size={17} />
                      {"In the wishlist"}
                    </>
                  ) : (
                    <>
                      <FaRegStar style={{ marginRight: "0.37rem" }} size={17} />
                      {"Add to wishlist"}
                    </>
                  )}
                </div>
              )}
              <Link onClick={handleAddToCart} className="btn btn-alt">
                {!existInCart ? (
                  <>
                    <IoCartOutline style={{ marginRight: "0.37rem" }} size={17} />
                    {"Add to cart"}
                  </>
                ) : (
                  <>
                    <IoCartSharp style={{ marginRight: "0.37rem" }} size={17} />
                    {"In the cart"}
                  </>
                )}
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
