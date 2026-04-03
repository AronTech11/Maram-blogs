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

/* Curated content pages — these are the rich pages already on the site */
const curatedSections = [
  {
    icon: "🏔️",
    title: "Villages",
    desc: "22 villages across the Senapati hills",
    link: "/about-maram/village",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: "🎭",
    title: "Festivals",
    desc: "Kanghi, Punghi, Mangkang and more",
    link: "/about-maram/festival",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    icon: "📖",
    title: "History & Culture",
    desc: "Centuries of monarchy and warrior traditions",
    link: "/about-maram/culture",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: "🎵",
    title: "Folk Songs",
    desc: "Harvest songs, war chants, and lullabies",
    link: "/about-maram/folk-songs",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: "🗿",
    title: "Folk Tales",
    desc: "Creation myths, Kafiipungna, and more",
    link: "/about-maram/stories",
    color: "bg-stone-100 text-stone-700 border-stone-300",
  },
  {
    icon: "😂",
    title: "Humour",
    desc: "Jokes and anecdotes from the community",
    link: "/about-maram/humour",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    icon: "📅",
    title: "Months & Weekdays",
    desc: "Traditional Maram lunar calendar",
    link: "/about-maram/months-weekdays",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    icon: "📚",
    title: "Publications",
    desc: "Tinghaa journal, Maram Folk Tales book",
    link: "/about-maram/publications",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: "🦋",
    title: "Senapati",
    desc: "Tahamzam, the hill of butterflies",
    link: "/about-maram/senapati",
    color: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    icon: "🏞️",
    title: "Tourist Spots",
    desc: "Sadim Pukhri, Willong Stonehenge and more",
    link: "/about-maram/tourist-spots",
    color: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    icon: "🌟",
    title: "Young Achievers",
    desc: "Maram men and women excelling across India",
    link: "/about-maram/young-achievers",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    icon: "⚔️",
    title: "Battle of Maram",
    desc: "A pivotal chapter in Maram history",
    link: "/about-maram/battle-of-maram",
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: "✍️",
    title: "Essays",
    desc: "17 essays on society, culture, and the future",
    link: "/about-maram/essays",
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    icon: "🎓",
    title: "Education",
    desc: "Schools, scholarships, and institutions",
    link: "/about-maram/education",
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    icon: "🤝",
    title: "Maram Union",
    desc: "The apex body of the Maram Naga tribe",
    link: "/about-maram/maram-union",
    color: "bg-lime-50 text-lime-700 border-lime-200",
  },
  {
    icon: "📰",
    title: "News",
    desc: "Latest happenings in the community",
    link: "/about-maram/news",
    color: "bg-gray-50 text-gray-700 border-gray-200",
  },
];

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });
  const [showAllSections, setShowAllSections] = useState(false);

  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  const handleSearch = () => setQuery({ search, category });
  const handleCategoryFilter = (cat) => {
    const newCat = cat === "all" ? "" : cat;
    setCategory(newCat);
    setQuery({ search, category: newCat });
  };

  const visibleSections = showAllSections
    ? curatedSections
    : curatedSections.slice(0, 8);

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

      {/* ====== CURATED CONTENT SECTIONS ====== */}
      <section className="py-10 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-primary">
                📂 Browse by Topic
              </h2>
              <p className="text-primary/50 text-sm mt-1">
                Rich, curated content on every aspect of Maram heritage
              </p>
            </div>
            <button
              onClick={() => setShowAllSections(!showAllSections)}
              className="text-accent text-sm font-semibold hover:underline whitespace-nowrap"
            >
              {showAllSections
                ? "Show less"
                : `View all ${curatedSections.length}`}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {visibleSections.map((section) => (
              <Link
                key={section.title}
                to={section.link}
                className={`group flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${section.color}`}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">
                  {section.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm leading-tight group-hover:underline">
                    {section.title}
                  </h3>
                  <p className="text-xs opacity-70 mt-0.5 line-clamp-2">
                    {section.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COMMUNITY BLOGS ====== */}
      <section className="bg-white border-b border-soft-gray sticky top-[56px] z-30">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-xs font-semibold text-primary/40 uppercase tracking-wider whitespace-nowrap">
              Filter:
            </span>
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
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-primary">
              ✏️ Community Blog Posts
            </h2>
            <p className="text-primary/50 text-sm mt-1">
              Written by community members &mdash; {blogs.length}{" "}
              {blogs.length === 1 ? "post" : "posts"}
              {category ? ` in "${category}"` : ""}
            </p>
          </div>

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
            <div className="text-center py-16 bg-soft-gray/20 rounded-xl">
              <p className="text-4xl mb-3">📝</p>
              <p className="font-heading text-xl text-primary/50 mb-2">
                No blog posts {category ? `in "${category}"` : "found"}
              </p>
              <p className="text-primary/40 text-sm mb-4 max-w-md mx-auto">
                {category
                  ? "No community members have written about this topic yet. Be the first!"
                  : "Try a different search term."}
              </p>
              {category && (
                <button
                  onClick={() => handleCategoryFilter("all")}
                  className="text-accent text-sm font-semibold hover:underline"
                >
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
