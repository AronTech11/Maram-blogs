import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../../../redux/features/blogs/blogsApi";
import { useSelector } from "react-redux";
import SingleBlogCard from "./SingleBlogCard";
import CommentCard from "../comments/CommentCard";
import RelatedBlogs from "./RelatedBlogs";
import BlogGallery from "../../../components/BlogGallery";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blog = {}, error, isLoading } = useFetchBlogByIdQuery(id);
  const { user } = useSelector((state) => state.auth);
  const isAdminOrAbove = user?.role === "admin" || user?.role === "superadmin";

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
          </div>
        )}
        {error && (
          <div className="text-center py-20 text-red-500">
            Something went wrong. Please try again.
          </div>
        )}
        {blog.post && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">

              {/* Quick Edit button for admins */}
              {isAdminOrAbove && (
                <div className="flex justify-end mb-3">
                  <Link
                    to={`/dashboard/update-items/${id}`}
                    className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                    Edit Blog
                  </Link>
                </div>
              )}

              <BlogGallery content={blog.post.content} mode="grid" />
              <SingleBlogCard blog={blog.post} />

              {/* Attachments (e.g., newspaper PDF) */}
              {Array.isArray(blog.post.attachments) &&
                blog.post.attachments.length > 0 && (
                  <div className="mt-6 bg-white rounded-xl overflow-hidden shadow-sm border border-soft-gray/50 p-6">
                    <h2 className="font-heading text-lg font-semibold text-primary mb-3">
                      Attachments
                    </h2>
                    <ul className="space-y-2">
                      {blog.post.attachments.map((a, idx) => (
                        <li key={`${a.url}-${idx}`}>
                          <a
                            href={a.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent underline break-all"
                          >
                            {a.name || a.url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              <CommentCard comments={blog.comments} />
            </div>
            <aside className="lg:w-1/3">
              <div className="sticky top-24">
                <RelatedBlogs />
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
