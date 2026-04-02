import React, { useState } from "react";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import UpdateUserModal from "./UpdateUserModal";

const ManageUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { data: users = [], error, isLoading, refetch } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(id).unwrap();
      alert("User deleted successfully");
      refetch();
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      {isLoading && <div className="text-primary/50">Loading...</div>}
      {error && <div className="text-red-500">Failed to load users.</div>}
      <div className="space-y-6">
        <h2 className="font-heading text-xl font-bold text-primary">
          Manage Users
        </h2>

        <div className="overflow-x-auto rounded-lg border border-soft-gray/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-warm-cream text-left">
                <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                  #
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                  Email
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                  Role
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                  Edit
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((u, index) => (
                  <tr
                    key={u._id}
                    className="border-t border-soft-gray/30 hover:bg-bgPrimary/50"
                  >
                    <td className="px-4 py-3 text-primary/60">{index + 1}</td>
                    <td className="px-4 py-3 text-primary font-medium">
                      {u?.email}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          u?.role === "superadmin"
                            ? "bg-warm-gold/20 text-warm-gold"
                            : u?.role === "admin"
                              ? "bg-accent/10 text-accent"
                              : "bg-warm-cream text-primary/60"
                        }`}
                      >
                        {u?.role === "superadmin"
                          ? "🛡️ Super Admin"
                          : u?.role === "admin"
                            ? "Admin"
                            : "User"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleEdit(u)}
                        className="text-accent hover:underline text-xs font-medium"
                      >
                        Edit Role
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 transition"
                        onClick={() => handleDelete(u?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <UpdateUserModal
          user={selectedUser}
          onClose={handleCloseModal}
          onRoleUpdate={refetch}
        />
      )}
    </>
  );
};

export default ManageUser;
