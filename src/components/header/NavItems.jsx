import { Link } from "react-router-dom";

const NavItems = ({ setToggle }) => {
  return (
    <nav>
      <ul className="nav-items">
        <li onClick={() => setToggle(false)}>
          <Link to="/">Shop</Link>
        </li>

        <li onClick={() => setToggle(false)}>
          <Link to="/orders" >Orders</Link>
        </li>

        {/* TODO  if admin    <li onClick={() => setToggle(false)}>
        <a href="/admin/products">Manage Products</a>
      </li>
      <li onClick={() => setToggle(false)}>
        <a href="/admin/orders">Manage Orders</a>
      </li> */}

        <li onClick={() => setToggle(false)}>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </li>

        <li onClick={() => setToggle(false)}>
          <Link to="/signup">Signup</Link>
        </li>
        <li onClick={() => setToggle(false)}>
          <Link to="/login">Login</Link>
        </li>

        {/* TODO  if loggedin <li onClick={() => setToggle(false)}>
        <a href="/user/profile">Profile</a>
      </li>
      <li onClick={() => setToggle(false)}>
        <form action="/logout" method="POST">
          <button>Logout</button>
        </form>
      </li> */}
      </ul>
    </nav>
  );
};

export default NavItems;
