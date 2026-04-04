import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import Img5 from "../../assets/hero-carousel/wm5.jpg";

const exploreItems = [
  {
    title: "Read Blogs",
    description: "Explore culture, tourism, essays, folk tales, and more",
    link: "/blogs",
  },
  {
    title: "About Maram",
    description: "Learn about education, villages, festivals and people",
    link: "/about-maram/culture",
  },
  {
    title: "Resources",
    description: "Scholarships and career counselling",
    link: "/resources/scholarship",
  },
  {
    title: "Contact",
    description: "Get in touch with the team",
    link: "/contact",
  },
];

const FeatureCard = ({ icon, title, description, link }) => (
  <Link
    to={link}
    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-soft-gray/50 hover:border-accent/20"
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-primary/60 text-sm leading-relaxed">{description}</p>
  </Link>
);

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const isAdminOrAbove = user?.role === "admin" || user?.role === "superadmin";
  const isLoggedIn = !!user;
  const { data: blogs = [] } = useFetchBlogsQuery({
    search: "",
    category: "",
  });
  const recentBlogs = blogs.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Quick Stats Bar */}
      <section className="bg-deep-brown text-white py-6">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "23", label: "Villages" },
            { number: "37,300+", label: "Population" },
            { number: "7", label: "Major Festivals" },
            { number: "100+", label: "Years of Heritage" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-heading text-2xl md:text-3xl font-bold text-warm-gold">
                {stat.number}
              </p>
              <p className="text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== ABOUT THE MARAM TRIBE (Story) ====== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
                Our Roots
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                The Story of the{" "}
                <span className="text-accent">Maram Naga People</span>
              </h2>
              <p className="text-primary/70 leading-relaxed mb-4">
                The Maram Naga are a Tibeto-Burman people inhabiting the
                Senapati district of Manipur, Northeast India. According to oral
                tradition, the first ancestors were{" "}
                <strong>Madungkasyii</strong> and{" "}
                <strong>S&apos;mutingdangpui</strong>, from whom the entire
                tribe descends. Maram Khullen (Maramei Namdi), the largest and
                oldest village, remains the spiritual and cultural epicenter.
              </p>
              <p className="text-primary/70 leading-relaxed mb-4">
                Historically a warrior tribe with a chieftainship system, the
                Marams are known for their fierce independence, deep respect for
                nature, and elaborate rituals tied to agriculture. The terraced
                rice fields, dense forests, and misty hilltops of Maram are not
                just landscapes; they are sacred spaces woven into every folk
                song and ceremony.
              </p>
              <p className="text-primary/70 leading-relaxed mb-6">
                Today, the Maram community numbers over 37,000 and is united
                under the Maram Union and MKS (Maram Khullen Students&apos;
                Union). While modernization has brought schools and
                infrastructure, the community continues to celebrate its
                identity through festivals like <strong>Punghi</strong> (harvest
                festival in July), <strong>Kanghi</strong> (December), and the
                grand <strong>Mangkang</strong>.
              </p>
              <Link
                to="/about-maram/culture"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Dive deeper into our history
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src={Img5}
                alt="Maram landscape"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-heading text-lg font-bold">
                  Since Time Immemorial
                </p>
                <p className="text-white/80 text-xs">
                  Senapati District, Manipur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Explore Grid */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
              Explore
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Discover the Maram World
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="🏔️"
              title="Villages"
              description="22 villages across the Senapati hills, with Maram Khullen as the cultural epicenter."
              link="/about-maram/village"
            />
            <FeatureCard
              icon="🎭"
              title="Festivals"
              description="Kanghi, Punghi, Mangkang and more: vibrant celebrations of harvest and community."
              link="/about-maram/festival"
            />
            <FeatureCard
              icon="📖"
              title="History & Culture"
              description="Centuries of monarchy, warrior traditions, and a unique way of life."
              link="/about-maram/culture"
            />
            <FeatureCard
              icon="📝"
              title="Blogs"
              description="Read and share stories with the global Maram community."
              link="/blogs"
            />
            <FeatureCard
              icon="🏞️"
              title="Tourism"
              description="Explore tourist spots and travel stories (now in Blogs)."
              link="/blogs?category=tourism"
            />
            <FeatureCard
              icon="📚"
              title="Essays"
              description="Community essays and reflections (now in Blogs)."
              link="/blogs?category=essays"
            />
            <FeatureCard
              icon="🗿"
              title="Folk Tales & Songs"
              description="Oral traditions, folk tales, and folk songs (now in Blogs)."
              link="/blogs?category=folk%20tales"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Browse all blog categories
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      {recentBlogs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-3">
                  Latest Stories
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  From the Community
                </h2>
              </div>
              <Link
                to="/blogs"
                className="hidden md:inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                View all blogs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recentBlogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog._id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-soft-gray/50"
                >
                  <div className="img-hover-zoom">
                    <img
                      src={blog.coverImg}
                      alt={blog.title}
                      className="w-full h-48 md:h-56 object-contain bg-soft-gray/10"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold mt-3 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-primary/50 text-sm line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-accent font-semibold"
              >
                View all blogs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            {isAdminOrAbove ? "Ready to Write?" : "Share Your Story"}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            {isAdminOrAbove
              ? "You have admin access. Create a new blog post and share the rich heritage of the Maram tribe with the world."
              : "Have a story, memory, or piece of knowledge about the Maram tribe? Join our community and help preserve our heritage for future generations."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAdminOrAbove ? (
              <Link
                to="/dashboard/add-new-post"
                className="bg-white text-accent font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-all"
              >
                ✍️ Write a Blog
              </Link>
            ) : isLoggedIn ? (
              <Link
                to="/blogs"
                className="bg-white text-accent font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-all"
              >
                Explore Blogs
              </Link>
            ) : (
              <Link
                to="/register"
                className="bg-white text-accent font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-all"
              >
                Create an Account
              </Link>
            )}
            <Link
              to="/contact-us"
              className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
