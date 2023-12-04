import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import PostsPage from "./pages/posts/PostsPage";
import AdminDashboard from "./pages/admin/AdminDashboardPage";
import CreatePostPage from "./pages/createPost/CreatePostPage";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts" element={<PostsPage />} />
        {/* TODO create-post on navlinks */}
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
