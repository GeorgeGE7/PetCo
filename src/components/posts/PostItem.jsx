import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <article className="product-item">
      <img src={post?.image?.url} alt={post?.title} />
      <div className="product-item-content">
        <h2> {post?.title}</h2>
        <Link to={`/posts/categories/${post?.category}`}>
          {post?.category}
        </Link>

        <p id="post-summery">{post?.content}</p>

        <div className="product-item-actions">
          <Link className="btn btn-alt" to={`/posts/details/${post?._id}`}>
            View Details
          </Link>
          <Link className="btn btn-alt">Add to cart</Link>
          {/* <% } %> */}
        </div>
      </div>
    </article>
  );
};

export default PostItem;
