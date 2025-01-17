import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { posts } from "../../dummyData";
import { FaEdit, FaRegStar, FaStar } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import CreatePostPage from "../createPost/CreatePostPage";

import { RotatingLines } from "react-loader-spinner";
import AddReview from "../../components/reviews/AddReview";
import ReviewList from "../../components/reviews/ReviewsList";
import { createNewOrder } from "../../redux/apiCalls/ordersApiCall";
import {
  deleteSinglePost,
  getSinglePost,
  togglePostLike,
} from "../../redux/apiCalls/postsApiCall";
import { userCartActions } from "../../redux/slices/cartSlice";
import { postActions } from "../../redux/slices/postSlice";

import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import "./postDetails.css";

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const [loginOrSignUpView, setLoginOrSignUpView] = useState(false);
  const [openEditMode, setOpenEditMode] = useState(false);

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
  }, []);

  const { singlePost, loading: postLoading } = useSelector(
    (state) => state.post
  );

  const { userCart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { loading, isOrderCreated } = useSelector((state) => state.order);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [id]);

  const navigate = useNavigate();

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

  const dletePost = () => {
    dispatch(deleteSinglePost(singlePost._id));
  };

  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dletePost();
        swal("Product has been deleted!", {
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      } else {
        swal("No changes happened");
      }
    });
  };
  const createOrder = () => {
    if (user) {
      dispatch(createNewOrder({ postId: id }));
    } else {
      setLoginOrSignUpView(true);
    }
  };

  return (
    <>
      {loginOrSignUpView && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--color-gray-600)",
              flexDirection: "column",
              padding: "2rem 0 2rem 0 ",
              fontWeight: "600",
            }}
          >
            <h2>You must login first</h2>
            <Link
              className="btn"
              style={{ margin: "2rem 0 1rem 0" }}
              to={"/signup"}
            >
              Create new account
            </Link>
            OR
            <Link style={{ marginTop: "1rem" }} className="btn" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      )}
      <main>
        {openEditMode ? (
          <CreatePostPage post={singlePost} setOpenEditMode={setOpenEditMode} />
        ) : postLoading ? (
          <div style={{ display: "flex", justifyContent: "center", width:"100%" }}>
            <RotatingLines strokeColor="#808080" />
          </div>
        ) : (
          <section className="post-details">
            <div className="post-details-image-wrapper">
              <img
                className="post-details-image"
                src={singlePost?.image?.url}
                alt={singlePost?.title}
              />
              <div style={{ position: "relative" }}>
                {user?.isAdmin && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <FaEdit
                      onClick={setOpenEditMode}
                      style={{ cursor: "pointer" }}
                      size={20}
                    />
                    <AiFillDelete
                      onClick={deletePostHandler}
                      style={{ cursor: "pointer" }}
                      size={20}
                    />
                  </div>
                )}
                <h1 className="post-detials-title">{singlePost?.title}</h1>
                <h3
                  className="post-detials-title"
                  style={{ margin: "-0.5rem 0 1.5rem 0", fontSize: "1.1rem" }}
                >
                  Price:{" "}
                   <span style={{ fontWeight: "600", fontSize: singlePost?.category?.includes("ervice") ? "0.8rem" : "1.3rem" }}>
                    {singlePost?.category?.includes("Service") ? "Not Set" : singlePost?.price}
                  </span>
                </h3>
                <div id="btns-container">
                  {user && (
                    <div
                      style={{ textAlign: "center", marginBottom: "0.7rem" }}
                      className="btn btn-alt"
                      onClick={() => dispatch(togglePostLike(singlePost?._id))}
                    >
                      {singlePost?.likes?.includes(user?._id) ? (
                        <>
                          <FaStar
                            style={{ marginRight: "0.37rem" }}
                            size={17}
                          />
                          {"In the wishlist"}
                        </>
                      ) : (
                        <>
                          <FaRegStar
                            style={{ marginRight: "0.37rem" }}
                            size={17}
                          />
                          {"Add to wishlist"}
                        </>
                      )}
                    </div>
                  )}
                  <Link onClick={handleAddToCart} className="btn btn-alt">
                    {!existInCart ? (
                      <>
                        <IoCartOutline
                          style={{ marginRight: "0.37rem" }}
                          size={17}
                        />
                        {"Add to cart"}
                      </>
                    ) : (
                      <>
                        <IoCartSharp
                          style={{ marginRight: "0.37rem" }}
                          size={17}
                        />
                        {"Remove"}
                      </>
                    )}
                  </Link>
                  {loading ? (
                    <button
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontWeight: "bold",
                        backgroundColor: "gray",
                        alignItems: "center",
                        justifyContent: "center",
                        // marginTop: "1rem",
                      }}
                      className="btn seconde"
                    >
                      <span style={{ marginRight: "0.5rem" }}>Loading...</span>
                      <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="20"
                        visible={true}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={createOrder}
                      className="btn seconde"
                      to={`/posts/details/${singlePost?._id}`}
                    >
                      Buy now
                    </button>
                  )}
                </div>
              </div>
            </div>
            <p
              style={{ whiteSpace: "pre-wrap" }}
              className="post-details-content"
            >
              {singlePost?.content}
            </p>
            {user && <AddReview postId={singlePost?._id} />}
            <ReviewList reviews={singlePost?.comments} />
          </section>
        )}
      </main>
    </>
  );
};

export default PostDetailsPage;
