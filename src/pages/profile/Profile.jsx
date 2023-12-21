import { useEffect, useState } from "react";
import PostList from "../../components/posts/PostList";
import { posts } from "../../dummyData";
import { toast } from "react-toastify";
import swal from "sweetalert";

import "./profile.css";

const Profile = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("Ther is no Image!");
    console.log("image uploaded");
  };

  const deleteAccountHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Account has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Changes are not saved");
      }
    });
  };

  return (
    <main className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : "/images/Investors 1.png"}
            alt="profile"
            className="profile-image"
          />
          <form onSubmit={formSubmitHandler} className="profile-photo-form">
            <abbr title="choose profile photo">
              <label htmlFor="file" className="btn btn-alt upload-profile-photo-label">
                Change photo
              </label>
            </abbr>
            <input
              className="upload-profile-photo-input"
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit" className="btn upload-profile-photo-btn">
              Upload
            </button>
          </form>
        </div>
        <h1 className="profile-username">George Emad</h1>
        <p className="profile-bio">Hello my name is George I am a DevOps</p>
        <div className="user-joined-date">
          <strong>Joined Date:</strong> <span>fri 26 040 2002</span>
        </div>
        <button className="btn btn-alt update-profile-btn">Update your account</button>
      </div>
      <div className="profile-posts-list">
        <h2>Your orders</h2>
        {/* TODO user orderList instead */}
        <PostList posts={posts} />
      </div>
      <button onClick={deleteAccountHandler} className="delete-account-btn">
        Delete Your Account
      </button>
    </main>
  );
};

export default Profile;
