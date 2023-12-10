import { Link, useParams } from "react-router-dom";
import { posts } from "../../dummyData";

import "./postDetails.css";
import AddReview from "../../components/reviews/AddReview";
import ReviewList from "../../components/reviews/ReviewsList";

const PostDetailsPage = () => {
  const params = useParams();

  const post = posts.find((p) => p._id == params.id);

  return (
    <main>
      <section className="post-details">
        <div className="post-details-image-wrapper">
          <img
            className="post-details-image"
            src={post.image}
            alt={post.title}
          />
          <div>
            <h1 className="post-detials-title">{post.title}</h1>
            <div id="btns-container">
              <Link className="btn btn-alt" to={`/post/details/${post._id}`}>
                Add to cart
              </Link>
              <Link
                className="btn btn-alt seconde"
                to={`/posts/details/${post._id}`}
              >
                Add to wishList
              </Link>
            </div>
          </div>
        </div>
        <p className="post-details-content">{post.content}</p>
        <AddReview />
        <ReviewList />
      </section>
    </main>
  );
};

export default PostDetailsPage;
