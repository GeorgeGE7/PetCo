import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";
import "./admin.css";

const AdminDashboardPage = () => {
  return <main className="admin-dashboard">
    <AdminSidebar />
    <AdminMain />
  </main>;
};

export default AdminDashboardPage;
