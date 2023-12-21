import { useState } from "react";

import "./updateProfile.css";

const user = {
  username: "Ahmed",
  bio: "hello world this is my bio",
};

const UpdateProfileModel = ({ setUpdateProfile }) => {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const updatedUser = { username, bio };

    if (password.trim() != "") {
      updatedUser.password = password;
    }

    console.log(updatedUser);

    setUpdateProfile(false);
  };

  return (
    <div className="update-profile">
      <form onSubmit={formSubmitHandler} className="update-profile-form">
        <abbr title="close">
          <span
            onClick={() => setUpdateProfile(false)}
            className="update-profile-form-close"
          >
            X
          </span>
        </abbr>
        <h1 className="update-profile-h1">Update Profile</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="update-profile-input"
        />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="2"
          className="update-profile-textarea"
        ></textarea>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="update-profile-input"
        />
        <button className="btn update-profile-form-btn" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileModel;
