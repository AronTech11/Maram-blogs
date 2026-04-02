import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const isAllowed = user?.role === "admin" || user?.role === "superadmin";

  if (!user || !isAllowed) {
    alert("You must be an admin or super admin!");
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 items-start justify-start pt-24 pb-12 px-6">
      <header className="lg:w-1/5 sm:w-2/5 w-full">
        <AdminNavigation />
      </header>
      <main className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-soft-gray/50 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
