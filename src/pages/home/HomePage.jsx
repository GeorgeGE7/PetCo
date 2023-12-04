import "./allProducts.css";
import "./products.css";

import { posts, categories } from "../../dummyData";
import PostItem from "../../components/posts/PostItem";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <section id="categories-sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <Link
              key={category._id}
              className="btn-alt categories-sidebar-link"
              to={`/posts/categories/${category.title}`}
            >
              {category.title}
            </Link>
          ))}
        </ul>
      </section>
      <section id="all-products">
        <h1>All Products</h1>
        <ul id="products-grid">
          {posts.map((post) => (
            <li key={post._id}>
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
