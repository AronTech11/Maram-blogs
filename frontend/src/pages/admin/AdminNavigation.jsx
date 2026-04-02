import React from "react";
import { NavLink } from "react-router-dom";
import { useLogoutUserMutation } from "../../redux/features/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";

const AdminNavigation = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const isSuperAdmin = user?.role === "superadmin";

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
      isActive
        ? "bg-accent/10 text-accent"
        : "text-primary/70 hover:bg-soft-gray/50 hover:text-primary"
    }`;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-5 md:h-[calc(100vh-130px)] flex flex-col justify-between">
      <div>
        <div className="mb-5 pb-4 border-b border-soft-gray/50">
          <p className="font-heading text-lg font-bold text-primary">
            {isSuperAdmin ? "Super Admin" : "Admin Panel"}
          </p>
          <p className="text-xs text-primary/40">
            {isSuperAdmin ? "Full access to everything" : "Manage your content"}
          </p>
        </div>
        <nav className="space-y-1">
          <NavLink to="/dashboard" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/add-new-post" className={linkClass}>
            Add New Post
          </NavLink>
          <NavLink to="/dashboard/manage-items" className={linkClass}>
            {isSuperAdmin ? "All Posts" : "My Posts"}
          </NavLink>
          {isSuperAdmin && (
            <NavLink to="/dashboard/users" className={linkClass}>
              Manage Users
            </NavLink>
          )}
        </nav>
      </div>

      <div className="pt-4 border-t border-soft-gray/50">
        {isSuperAdmin && (
          <p className="text-xs text-warm-gold font-medium text-center mb-3">
            🛡️ Super Admin
          </p>
        )}
        <button
          onClick={handleLogout}
          className="w-full text-white bg-tribal-red hover:bg-tribal-red/90 font-medium px-4 py-2.5 rounded-lg text-sm transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavigation;
