import React, { useEffect, useMemo, useState } from "react";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { Link, useSearchParams } from "react-router-dom";
import { formatDate } from "../../utilis/dateFormater";

const BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const resolveImg = (url) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${BACKEND_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

// Clean canonical categories shown in the dropdown
const FILTER_OPTIONS = [
  { label: "All Blogs",    value: "all" },
  { label: "Culture",      value: "culture" },
  { label: "Essays",       value: "essays" },
  { label: "Folk Songs",   value: "folk songs" },
  { label: "Folk Tales",   value: "folk tales" },
  { label: "Tourism",      value: "tourism" },
  { label: "Festival",     value: "festival" },
  { label: "Humour",       value: "humour" },
  { label: "Education",    value: "education" },
  { label: "Livelihood",   value: "livelihood" },
  { label: "Villages",     value: "village" },
];

// Categories hidden from the "all" view (shown only when specifically filtered)
const HIDDEN_FROM_ALL = ["village"];

function normalizeCategory(value) {
  if (!value) return "";
  const v = String(value).trim().toLowerCase();
  if (v === "all") return "";
  return FILTER_OPTIONS.some(o => o.value === v) ? v : "";
}

function normalizeSearch(value) {
  if (!value) return "";
  return String(value).trim();
}

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFromUrl = useMemo(() => ({
    search: normalizeSearch(searchParams.get("search")),
    category: normalizeCategory(searchParams.get("category")),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), []);

  const [search, setSearch] = useState(initialFromUrl.search);
  const [category, setCategory] = useState(initialFromUrl.category);
  const [query, setQuery] = useState({
    search: initialFromUrl.search,
    category: initialFromUrl.category,
  });

  useEffect(() => {
    const nextSearch = normalizeSearch(searchParams.get("search"));
    const nextCategory = normalizeCategory(searchParams.get("category"));
    setSearch(nextSearch);
    setCategory(nextCategory);
    setQuery({ search: nextSearch, category: nextCategory });
  }, [searchParams]);

  const { data: blogsRaw = [], error, isLoading } = useFetchBlogsQuery(query);

  // When "all" is selected, hide village blogs so they only show under Villages filter
  const blogs = useMemo(() => {
    if (category) return blogsRaw; // specific filter — show everything for that category
    return blogsRaw.filter(b => !HIDDEN_FROM_ALL.includes((b.category || "").toLowerCase()));
  }, [blogsRaw, category]);

  const handleSearch = () => {
    const next = {
      search: normalizeSearch(search),
      category: normalizeCategory(category),
    };
    setSearch(next.search);
    setCategory(next.category);
    setQuery(next);
    const params = new URLSearchParams();
    if (next.search) params.set("search", next.search);
    if (next.category) params.set("category", next.category);
    setSearchParams(params, { replace: false });
  };

  const handleCategoryFilter = (val) => {
    const newCat = val === "all" ? "" : val;
    const next = { search: normalizeSearch(search), category: newCat };
    setCategory(newCat);
    setQuery(next);
    const params = new URLSearchParams();
    if (next.search) params.set("search", next.search);
    if (next.category) params.set("category", next.category);
    setSearchParams(params, { replace: false });
  };

  const activeLabel = FILTER_OPTIONS.find(o =>
    category ? o.value === category : o.value === "all"
  )?.label || "All Blogs";

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-deep-brown py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="text-warm-gold">Maram Heritage</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Curated content, community blogs, and everything about the Maram
            Naga tribe, all in one place.
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

      {/* Filter Bar — dropdown */}
      <section className="bg-white border-b border-soft-gray sticky top-[56px] z-30">
        <div className="container mx-auto px-6 py-3 flex items-center gap-3">
          <span className="text-xs font-semibold text-primary/40 uppercase tracking-wider whitespace-nowrap">
            Filter:
          </span>
          <select
            value={category || "all"}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            className="bg-soft-gray/30 text-primary text-sm font-medium px-4 py-2 rounded-lg border border-soft-gray/60 focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
          >
            {FILTER_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {category && (
            <button
              onClick={() => handleCategoryFilter("all")}
              className="text-xs text-accent hover:underline"
            >
              ✕ Clear
            </button>
          )}
          <span className="ml-auto text-xs text-primary/40">
            {blogs.length} {blogs.length === 1 ? "post" : "posts"}
            {category ? ` in "${activeLabel}"` : ""}
          </span>
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
              <p className="text-primary/50 text-sm">Please check your connection and try again.</p>
            </div>
          )}

          {!isLoading && !error && blogs.length === 0 && (
            <div className="text-center py-16 bg-soft-gray/20 rounded-xl">
              <p className="text-4xl mb-3">📝</p>
              <p className="font-heading text-xl text-primary/50 mb-2">
                No posts {category ? `in "${activeLabel}"` : "found"}
              </p>
              <p className="text-primary/40 text-sm mb-4 max-w-md mx-auto">
                {category ? "No content in this category yet." : "Try a different search term."}
              </p>
              {category && (
                <button onClick={() => handleCategoryFilter("all")} className="text-accent text-sm font-semibold hover:underline">
                  ← View all posts
                </button>
              )}
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
                    src={resolveImg(blog.coverImg)}
                    alt={blog.title}
                    className="w-full h-48 md:h-52 object-cover bg-soft-gray/10"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full capitalize">
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
