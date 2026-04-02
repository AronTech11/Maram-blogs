import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchRelatedBlogsQuery } from "../../../redux/features/blogs/blogsApi";

const RelatedBlogs = () => {
  const { id } = useParams();
  const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 border border-soft-gray/50">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-soft-gray rounded w-1/2"></div>
          <div className="h-16 bg-soft-gray rounded"></div>
          <div className="h-16 bg-soft-gray rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden">
      <div className="p-6 border-b border-soft-gray/50">
        <h3 className="font-heading text-xl font-semibold">Related Blogs</h3>
      </div>
      {blogs.length === 0 ? (
        <p className="p-6 text-primary/40 text-sm">No related blogs found.</p>
      ) : (
        <div className="divide-y divide-soft-gray/50">
          {blogs.map((blog) => (
            <Link
              to={`/blogs/${blog._id}`}
              key={blog._id}
              className="flex items-start gap-3 p-4 hover:bg-warm-cream/50 transition-colors"
            >
              <img
                src={blog.coverImg}
                alt={blog.title}
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-sm font-medium text-primary hover:text-accent transition-colors line-clamp-2">
                  {blog.title}
                </h4>
                <p className="text-xs text-primary/40 mt-1 line-clamp-1">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedBlogs;
