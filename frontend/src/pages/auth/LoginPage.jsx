import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";
import { postActions } from "../../redux/slices/postSlice";

import { RotatingLines } from "react-loader-spinner";
import "./auth-form.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    if (email.trim() == "") {
      setLoading(false);
      return toast.error("Email is required");
    }

    if (password.trim() == "") {
      setLoading(false);
      return toast.error("Password is required");
    }

    dispatch(loginUser({ email, password }));
    setLoading(false);
  };

  return (
    <main>
      <div className="form-container">
        <h1>{"Welcome back :)"}</h1>
        <form onSubmit={formSubmitHandler} className="auth-form">
          <div className="auth-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="auth-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p>
            Didn't remember your password?{" "}
            <Link to="/forgot-password">Reset password</Link>
          </p>

          <button disabled={loading} className="btn" type="submit">
            {loading ? <RotatingLines strokeColor="#fff" width="27" /> : "Login"}
          </button>
        </form>
        <p className="login-link">
          Don't has an account?
          <Link to="/signup"> Create an account</Link>
        </p>
      </div>
    </main>
  );
};
export default LoginPage;
