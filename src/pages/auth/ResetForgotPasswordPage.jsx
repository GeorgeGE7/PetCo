import { useState } from "react";
import { toast } from "react-toastify";

import "./auth-form.css";

const ResetForgotPasswordPage = () => {
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();


    if (password.trim() == "") {
      return toast.error("Password is required");
    }

    console.log({ password });
  };

  return (
    <main>
      <div className="form-container">
        <h1>Create new password</h1>
        <form onSubmit={formSubmitHandler} className="auth-form">
          <div className="auth-form">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};
export default ResetForgotPasswordPage;
