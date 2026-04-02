/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaBlog, FaRegComment } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { useFetchBlogsQuery } from "../../../redux/features/blogs/blogsApi";
import { useGetUserQuery } from "../../../redux/features/auth/authApi";
import { useGetCommentsQuery } from "../../../redux/features/comments/commentsApi";
import BlogsChart from "./BlogsChart";

const Dashboard = () => {
  const [query, setQuery] = useState({ search: "", category: "" });
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
  const { data: users = [] } = useGetUserQuery();
  const { data: comments = [] } = useGetCommentsQuery();
  // console.log(comments.totalComments)
  const { user } = useSelector((state) => state.auth);

  // Calculate the number of "admin" role
  const adminCount = users.filter(
    (u) => u.role === "admin" || u.role === "superadmin",
  ).length;
  const isSuperAdmin = user?.role === "superadmin";

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div className="space-y-6">
        <div className="bg-warm-cream p-5 rounded-xl">
          <h1 className="font-heading text-xl font-bold text-primary">
            Hi, {user.username}!
          </h1>
          <p className="text-primary/60 mt-1">
            Welcome to the admin dashboard. Manage your blog posts, users, and
            content.
          </p>
        </div>
        {/* cards grid */}
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-8">
          <div className="bg-warm-cream py-6 w-full rounded-xl space-y-1 flex flex-col items-center">
            <FiUsers className="size-8 text-accent" />
            <p className="font-heading font-bold text-primary">
              {users.length} Users
            </p>
          </div>
          <div className="bg-warm-cream py-6 w-full rounded-xl space-y-1 flex flex-col items-center">
            <FaBlog className="size-8 text-earth-green" />
            <p className="font-heading font-bold text-primary">
              {blogs.length} Blogs
            </p>
          </div>
          <div className="bg-warm-cream py-6 w-full rounded-xl space-y-1 flex flex-col items-center">
            <RiAdminLine className="size-8 text-warm-gold" />
            <p className="font-heading font-bold text-primary">
              {adminCount} Admin{adminCount !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="bg-warm-cream py-6 w-full rounded-xl space-y-1 flex flex-col items-center">
            <FaRegComment className="size-8 text-tribal-red" />
            <p className="font-heading font-bold text-primary">
              {comments.totalComments} Comments
            </p>
          </div>
        </div>

        {/* graph charts */}
        <div className="pt-5 pb-5">
          <BlogsChart blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
