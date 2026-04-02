import React, { useState } from "react";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { Link } from "react-router-dom";
import { formatDate } from "../../utilis/dateFormater";

const categories = [
  "all",
  "village",
  "culture",
  "festival",
  "education",
  "news",
  "livelihood",
  "history",
  "language",
  "folk tales",
  "tradition",
  "food",
  "music & dance",
  "sports",
  "religion",
  "art & craft",
  "story",
  "other",
];

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  const handleSearch = () => setQuery({ search, category });
  const handleCategoryFilter = (cat) => {
    const newCat = cat === "all" ? "" : cat;
    setCategory(newCat);
    setQuery({ search, category: newCat });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-deep-brown py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Community <span className="text-warm-gold">Blogs</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Stories, knowledge, and perspectives from the Maram community.
            Anyone can read. Registered users can share their stories.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto flex">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 px-5 py-3 rounded-l-lg bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-warm-gold/50"
            />
            <button
              onClick={handleSearch}
              className="bg-warm-gold text-deep-brown font-semibold px-6 py-3 rounded-r-lg hover:bg-warm-gold/90 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-soft-gray sticky top-[56px] z-30">
        <div className="container mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  (cat === "all" && !category) || category === cat
                    ? "bg-accent text-white"
                    : "bg-soft-gray/50 text-primary/60 hover:bg-soft-gray"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {isLoading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 mb-2">Failed to load blogs</p>
              <p className="text-primary/50 text-sm">
                Please check your connection and try again.
              </p>
            </div>
          )}

          {!isLoading && !error && blogs.length === 0 && (
            <div className="text-center py-20">
              <p className="font-heading text-2xl text-primary/40 mb-2">
                No blogs found
              </p>
              <p className="text-primary/40 text-sm">
                Try a different search or category.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blogs/${blog._id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-soft-gray/50 hover:border-accent/20"
              >
                <div className="img-hover-zoom">
                  <img
                    src={blog.coverImg}
                    alt={blog.title}
                    className="w-full h-48 md:h-52 object-contain bg-soft-gray/10"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-primary/40">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-primary/50 text-sm line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-accent">
                        {blog.author?.email?.charAt(0).toUpperCase() || "A"}
                      </span>
                    </div>
                    <span className="text-xs text-primary/40">
                      {blog.author?.email || "Anonymous"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
