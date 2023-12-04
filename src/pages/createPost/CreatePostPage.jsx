import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "./createPost.css";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [file, settFile] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") return toast.error("Title required");
    if (content.trim() === "") return toast.error("description required");
    if (category.trim() === "") return toast.error("category required");
    if (price.trim() === "") return toast.error("price required");
    if (file.trim() === "") return toast.error("Image required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("price", price);
  };

  return (
    <main className="form-container">
      <ToastContainer theme="dark" position="top-center" />
      <h1>Add new Product</h1>
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
          <option value="music">Food</option>
          <option value="cars">cars</option>
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
          <label htmlFor="quantity">Quantity</label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
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
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="create-post-btns">
          <button type="reset" className="btn btn-alt">
            Reset
          </button>
          <button type="submit" className="btn">
            Create
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreatePostPage;
