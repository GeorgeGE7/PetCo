import { Link } from "react-router-dom";
import "./notFound.css";



const NotFoundPage = () => {
  return (
    <main>
      <div id="not-found">
        <p>404</p>
        <div id="not-found-title">Page not found</div>
        <button className="btn">
          <Link to="/">Back to safety</Link>
        </button>
      </div>
    </main>
  );
};

export default NotFoundPage;
