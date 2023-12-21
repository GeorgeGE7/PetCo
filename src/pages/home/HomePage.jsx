import { Link } from "react-router-dom";
import PostList from "../../components/posts/PostList";
import "./allProducts.css";
import "./products.css";

import { posts, categories } from "../../dummyData";

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
      <PostList title={"All Products"} posts={posts} />
    </main>
  );
};

export default HomePage;
