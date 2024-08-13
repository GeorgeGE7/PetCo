import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";
import { postActions } from "../../redux/slices/postSlice";

import { RotatingLines } from "react-loader-spinner";
import "./auth-form.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(postActions.hideSearchBar());
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() == "") {
      return toast.error("Email is required");
    }

    if (password.trim() == "") {
      return toast.error("Password is required");
    }

    dispatch(loginUser({ email, password }));
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
            {loading ? (
              <div
                style={{ display: "flex", gap: "0.5rem", flexDirection: "row" }}
              >
                loading... <RotatingLines strokeColor="#fff" width="15" />
              </div>
            ) : (
              "Login"
            )}
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
