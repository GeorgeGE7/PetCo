import PostItem from "./PostItem";

import "./postList.css";

const PostList = ({ title, posts }) => {
  return (
    <section id="all-products">
      <h2>{title}</h2>
      <ul id="products-grid">
        {posts.map((post) => (
          <li key={post._id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostList;
