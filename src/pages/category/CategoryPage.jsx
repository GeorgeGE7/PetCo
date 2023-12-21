import { useParams } from "react-router-dom";

import "./category.css";
import PostList from "../../components/posts/PostList";
import { posts } from "../../dummyData";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <main>
      <section className="category">
        <PostList title={category} posts={posts} />
      </section>
    </main>
  );
};

export default CategoryPage;
