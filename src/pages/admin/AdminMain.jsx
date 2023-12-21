import { Link } from "react-router-dom";
import AddCategoryForm from "./AddCategoryForm";

const AdminMain = () => {
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-card-title">Users</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-links-wrapper">
            <Link className="btn btn-alt" to="/admin-dashboard/users-table">
              See all users
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-main-card">
          <h5 className="admin-card-title">Products</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-links-wrapper">
            <Link className="btn btn-alt" to="/admin-dashboard/posts-table">
              See all products
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-main-card">
          <h5 className="admin-card-title">categories</h5>
          <div className="admin-card-count">20</div>
          <div className="admin-card-links-wrapper">
            <Link
              className="btn btn-alt"
              to="/admin-dashboard/categories-table"
            >
              See all categories
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-main-card">
          <h5 className="admin-card-title">Reviews</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-links-wrapper">
            <Link className="btn btn-alt" to="/admin-dashboard/reviews-table">
              See all reviews
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-main-card">
          <h5 className="admin-card-title">Orders</h5>
          <div className="admin-card-count">120</div>
          <div className="admin-card-links-wrapper">
            <Link className="btn btn-alt" to="/admin-dashboard/orders-table">
              See all orders
            </Link>
          </div>
        </div>
      </div>
      <AddCategoryForm />
    </div>
  );
};

export default AdminMain;
