import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/apiCalls/postsApiCall";
import PostItem from "./PostItem";

import "./postList.css";

const PostList = ({ title, posts }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  useEffect(() => {
    if (search == "") {
      dispatch(getAllPosts());
    }
    if (search) {
      dispatch(getAllPosts(search));
    }
  }, [search]);
  return (
    <section id="all-products">
      <div
        id="title-and-search-bar"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <h2>{title}</h2>
        <input
          placeholder="Search..."
          id="search-bar-mobile"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <input
        placeholder="Search..."
        id="search-bar-smallest"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul id="products-grid">
        {posts?.map((post) => (
          <li key={post._id}>
            <PostItem title={title} post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostList;
