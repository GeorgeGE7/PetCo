import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

import "./createPost.css";
import { createPost, updatePost } from "../../redux/apiCalls/postsApiCall";
import { postActions } from "../../redux/slices/postSlice";
import { getAllCategories } from "../../redux/apiCalls/categoryApiCall";

const CreatePostPage = ({ post, setOpenEditMode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
  }, []);

  const { loading, isPostCreated } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [meta, setMeta] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [file, settFile] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") return toast.error("Title required");
    if (content.trim() === "") return toast.error("description required");
    if (category.trim() === "") return toast.error("category required");
    if (price <= 0) return toast.error("price required");
    // if (quantity <= 0) return toast.error("Quantity required");
    if (!file & !post) return toast.error("Image required");

    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    // formData.append("quantity", quantity);
    formData.append("price", price);
    if (meta) {
      formData.append("meta", meta);
    }
    if (post) {
      dispatch(updatePost(post.id, formData));
      setOpenEditMode(false);
    } else {
      dispatch(createPost(formData));
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isPostCreated && !post) {
      navigate("/");
    }
  }, [isPostCreated, navigate, post]);

  useEffect(() => {
    dispatch(getAllCategories());
    if (post) {
      setCategory(post?.category);
      setContent(post?.content);
      setMeta(post?.meta);
      setTitle(post?.title);
      setPrice(post?.price);
      // settFile(post?.image);
    }
  }, []);

  return (
    <main className="form-container">
      <h1>{post ? "Update Product" : "Add new Product"}</h1>
      {(file || post?.image?.url) && (
        <img src={file ? URL.createObjectURL(file) : post?.image?.url} alt="" />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className="create-post-image">
          <label className="btn" htmlFor="file">
            Select an image
          </label>
          <input
            onChange={(e) => settFile(e.target.files[0])}
            className="create-post-image"
            type="file"
            id="file"
            name="file"
            accept="image/png,image/jpg,image/jpeg"
          />
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option disabled value="">
            Select a category
          </option>
          {categories?.map((category) => (
            <option key={category?._id} value={category?.title}>
              {category?.title}
            </option>
          ))}
        </select>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="description"
            className="create-post-textarea"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label htmlFor="meta">
            Meta Data <span className="optional-label">(Optional)</span>
          </label>
          <input
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
            type="text"
            id="meta"
            name="meta"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="price"
            name="price"
            // min="0.01"
            step="0.01"
          />
        </div>

        <div className="create-post-btns" style={{ gap: "2rem" }}>
          {post && (
            <button
              style={{ backgroundColor: "rgb(63, 65, 69)" }}
              onClick={(e) => {
                e.preventDefault();
                setOpenEditMode(false);
              }}
              className="btn"
            >
              Cancel
            </button>
          )}
          {loading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontWeight: "bold",
                backgroundColor: "gray",
              }}
              className="btn"
            >
              <span style={{ marginRight: "0.5rem" }}>Loading...</span>
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
              />
            </div>
          ) : (
            <button
              style={{ backgroundColor: loading && "gray" }}
              disabled={loading ? true : false}
              type="submit"
              className="btn"
            >
              {post ? "Update" : "Create"}
            </button>
          )}
        </div>
      </form>
    </main>
  );
};

export default CreatePostPage;
