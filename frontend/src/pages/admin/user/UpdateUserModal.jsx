import React, { useState } from "react";
import { useUpdateUserRoleMutation } from "../../../redux/features/auth/authApi";

const UpdateUserModal = ({ user, onClose, onRoleUpdate }) => {
  const [role, setRole] = useState(user.role);
  const [updateUserRole] = useUpdateUserRoleMutation();

  const handleUpdateRole = async () => {
    try {
      await updateUserRole({ userId: user._id, role }).unwrap();
      alert("User role updated successfully");
      onRoleUpdate();
      onClose();
    } catch (error) {
      console.error("Failed to update user role", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-4">
        <h2 className="font-heading text-xl font-bold text-primary mb-6">
          Edit User Role
        </h2>
        <div className="mb-4 space-y-2">
          <label className="block text-sm font-medium text-primary/70">
            Email
          </label>
          <input
            type="text"
            value={user.email}
            readOnly
            className="mt-1 bg-bgPrimary block w-full shadow-sm text-sm border border-soft-gray/50 rounded-lg py-2.5 px-4 focus:outline-none text-primary/50"
          />
        </div>
        <div className="mb-6 space-y-2">
          <label className="block text-sm font-medium text-primary/70">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="block w-full shadow-sm text-sm border border-soft-gray/50 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-primary/70 bg-soft-gray/50 hover:bg-soft-gray transition"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateRole}
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-accent hover:bg-accent/90 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
