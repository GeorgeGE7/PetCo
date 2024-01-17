import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./auth-form.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (username.trim() == "") {
      return toast.error("Username is required");
    }

    if (email.trim() == "") {
      return toast.error("Email is required");
    }

    if (password.trim() == "") {
      return toast.error("Password is required");
    }

    console.log({ username, email, password });
  };

  return (
    <main>
      <div className="form-container">
        <h1>Create new account</h1>
        <form onSubmit={formSubmitHandler} className="auth-form">
          <div className="auth-form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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

          <button className="btn" type="submit">
            Sign up
          </button>
        </form>
        <p className="login-link">
          Already have an account?
          <Link to="/login"> Login instead</Link>
        </p>
      </div>
    </main>
  );
};

export default SignupPage;
