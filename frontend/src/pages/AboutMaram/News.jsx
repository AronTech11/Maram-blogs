import React from "react";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { Link } from "react-router-dom";
import { formatDate } from "../../utilis/dateFormater";

const News = () => {
  const { data: blogs = [], isLoading } = useFetchBlogsQuery({
    search: "",
    category: "news",
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Stay Informed
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            News & Updates
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Latest news, events, and updates from the Maram Naga community.
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-soft-gray/50 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <div className="space-y-6">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog._id}`}
                  className="block bg-white rounded-xl p-6 shadow-sm border border-soft-gray/50 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full uppercase">
                      News
                    </span>
                    <span className="text-xs text-primary/40">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {blog.title}
                  </h3>
                  {blog.description && (
                    <p className="text-primary/60 text-sm line-clamp-2">
                      {blog.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">📰</p>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                No News Yet
              </h3>
              <p className="text-primary/50 mb-6">
                Check back soon for the latest updates from the Maram community.
              </p>
              <Link
                to="/blogs"
                className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-lg hover:bg-accent/90 transition"
              >
                Browse All Blogs
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
