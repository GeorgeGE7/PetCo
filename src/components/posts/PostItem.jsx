import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCartActions } from "../../redux/slices/cartSlice";

const PostItem = ({ title, post }) => {
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.cart);
  const [existInCart, setExistInCart] = useState(false);

  useEffect(() => {
    const existingItem = userCart.find((i) => i._id === post._id);
    if (existingItem) {
      setExistInCart(true);
    } else {
      setExistInCart(false);
    }
  }, [userCart, post]);

  const handleAddToCart = () => {
    dispatch(userCartActions.handleCartAddOrRemove(post));
    // console.log(userCart);
  };
  return (
    <article className="product-item">
      <img src={post?.image?.url} alt={post?.title} />
      <div className="product-item-content">
        <h2> {post?.title}</h2>
        <Link to={`/posts/categories/${post?.category}`}>{post?.category}</Link>

        <p id="post-summery">{post?.content}</p>

        <div className="product-item-actions">
          <Link className="btn btn-alt" to={`/posts/details/${post?._id}`}>
            View Details
          </Link>
          <Link onClick={handleAddToCart} className="btn btn-alt">
            {!existInCart ? "Add to cart" : "In the cart"}
          </Link>
        </div>
        {title === "Your Cart" && (
          <button
            className="btn"
            style={{ width: "100%", marginTop: "0.57rem" }}
          >
            Buy now
          </button>
        )}
      </div>
    </article>
  );
};

export default PostItem;
