import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategoryPosts } from "../../redux/apiCalls/postsApiCall";
import PostList from "../../components/posts/PostList";
import "./category.css";
import { postActions } from "../../redux/slices/postSlice";
import { RotatingLines } from "react-loader-spinner";

const CategoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
  }, []);

  const { category } = useParams();
  const { postsCategory, loading } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryPosts(category));
  }, [category]);

  return (
    <main>
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <RotatingLines strokeColor="#808080" />
        </div>
      ) : (
        // <section className="category">
          postsCategory?.length === 0 ? (
            <>
              <h2 id="category-not-found">
                Products on <span>{category}</span> not found!
              </h2>
              <Link className="btn category-not-found-link" to="/">
                Back to home
              </Link>
            </>
          ) : (
            <>
              <section id="categories-sidebar">
                <h2>Categories</h2>
                <ul>
                  {categories?.map((category) => (
                    <Link
                      key={category?._id}
                      className="btn-alt categories-sidebar-link"
                      to={`/posts/categories/${category?.title}`}
                    >
                      {category?.title}
                    </Link>
                  ))}
                </ul>
              </section>

              <PostList title={category} posts={postsCategory} />
            </>
          )
        // </section>
      )}
    </main>
  );
};

export default CategoryPage;
