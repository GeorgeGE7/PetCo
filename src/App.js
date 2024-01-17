import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
// import PostsPage from "./pages/posts/PostsPage";
import AdminDashboard from "./pages/admin/AdminDashboardPage";
import CreatePostPage from "./pages/createPost/CreatePostPage";
import PostDetailsPage from "./pages/posts/PostDetailsPage";
import CategoryPage from "./pages/category/CategoryPage";
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";

function App() {
  return (
    <BrowserRouter className="App">
      <ToastContainer theme="dark" position="top-center" />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/posts" element={<PostsPage />} /> */}
        <Route path="posts">
          {/* TODO create-post on navlinks */}
          <Route path="create-post" element={<CreatePostPage />} />
          <Route path="details/:id" element={<PostDetailsPage />} />
          <Route path="categories/:category" element={<CategoryPage />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/users-table" element={<UsersTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
