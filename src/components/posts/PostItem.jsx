import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <article className="product-item">
      <img src={post.image} alt="<%= product.title %>" />
      <div className="product-item-content">
        <h2> {post.title}</h2>
        <Link to={`/posts/categories/${post.category}`}> {post.category}</Link>

        <p id="post-summery">{post.content}</p>

        <div className="product-item-actions">
          {/* TODO <% if (locals.isAdmin) { %>
        <a className="btn btn-alt" href="/admin/products/<%= product.id %>">View & Edit</a>
        <button className="btn btn-alt" data-productid="<%= product.id %>" data-csrf="<%= locals.csrfToken %>">Delete</button>
      <% } else { %> */}
          <Link className="btn btn-alt" to={`/post/details/${post._id}`}>
            View Details
          </Link>
          <Link className="btn btn-alt" to={`/post/details/${post._id}`}>
            Add to cart
          </Link>
          {/* <% } %> */}
        </div>
      </div>
    </article>
  );
};

export default PostItem;
