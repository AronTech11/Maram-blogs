import React, { useState } from "react";
import {
  useDeleteBlogMutation,
  useFetchBlogsQuery,
} from "../../../redux/features/blogs/blogsApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utilis/dateFormater";

const ManagePosts = () => {
  const [query, setQuery] = useState({ search: "", category: "" });
  const {
    data: blogs = [],
    error,
    isLoading,
    refetch,
  } = useFetchBlogsQuery(query);
  const [deletePost] = useDeleteBlogMutation();
  const { user } = useSelector((state) => state.auth);
  const isSuperAdmin = user?.role === "superadmin";

  // Admins only see their own posts, superadmins see all
  const visibleBlogs = isSuperAdmin
    ? blogs
    : blogs.filter(
        (blog) =>
          blog.author?._id === user?._id || blog.author?.email === user?.email,
      );

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const response = await deletePost(id).unwrap();
      alert(response.message);
      refetch();
    } catch (error) {
      console.error("Failed to delete the blog post:", error);
      alert(error?.data?.message || "Failed to delete post");
    }
  };

  return (
    <>
      {isLoading && <div className="text-primary/50">Loading...</div>}
      {error && <div className="text-red-500">Failed to load blogs.</div>}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading text-xl font-bold text-primary">
              {isSuperAdmin ? "All Blog Posts" : "My Blog Posts"}
            </h2>
            <p className="text-xs text-primary/50 mt-1">
              {isSuperAdmin
                ? "You can manage all posts as Super Admin"
                : "You can only edit and delete your own posts"}
            </p>
          </div>
          <Link
            to="/dashboard/add-new-post"
            className="text-xs font-medium bg-accent text-white px-3 py-1.5 rounded-lg hover:bg-accent/90 transition"
          >
            + New Post
          </Link>
        </div>

        {visibleBlogs.length === 0 && !isLoading ? (
          <div className="text-center py-12 bg-warm-cream/50 rounded-xl">
            <p className="text-primary/50 mb-3">
              {isSuperAdmin
                ? "No blog posts yet."
                : "You haven't written any posts yet."}
            </p>
            <Link
              to="/dashboard/add-new-post"
              className="text-accent font-medium text-sm underline"
            >
              Write your first post →
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-soft-gray/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-warm-cream text-left">
                  <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                    #
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                    Title
                  </th>
                  {isSuperAdmin && (
                    <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                      Author
                    </th>
                  )}
                  <th className="px-4 py-3 text-xs font-semibold text-primary/60 uppercase">
                    Date
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
                {visibleBlogs.map((blog, index) => (
                  <tr
                    key={blog._id}
                    className="border-t border-soft-gray/30 hover:bg-bgPrimary/50"
                  >
                    <td className="px-4 py-3 text-primary/60">{index + 1}</td>
                    <td className="px-4 py-3 text-primary font-medium max-w-xs truncate">
                      {blog.title}
                    </td>
                    {isSuperAdmin && (
                      <td className="px-4 py-3 text-primary/50 text-xs">
                        {blog.author?.username ||
                          blog.author?.email ||
                          "Unknown"}
                      </td>
                    )}
                    <td className="px-4 py-3 text-primary/50 whitespace-nowrap">
                      {formatDate(blog.createdAt)}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        to={`/dashboard/update-items/${blog._id}`}
                        className="text-accent hover:underline text-xs font-medium"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 transition"
                        onClick={() => handleDelete(blog._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default ManagePosts;
