import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";
import logoMaram from "../assets/logo_maram.png";

const navLists = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "About Maram",
    submenu: [
      { name: "History & People", path: "/about-maram/culture" },
      { name: "Villages", path: "/about-maram/village" },
      { name: "Festivals", path: "/about-maram/festival" },
      { name: "Months & Weekdays", path: "/about-maram/months-weekdays" },
      { name: "Publications", path: "/about-maram/publications" },
      { name: "Education", path: "/about-maram/education" },
      { name: "Maram Union", path: "/about-maram/maram-union" },
      { name: "MKS", path: "/about-maram/mks" },
      { name: "News", path: "/about-maram/news" },
    ],
  },
  {
    name: "Resources",
    submenu: [
      { name: "Career Guidance", path: "/resources/career-guidance" },
      { name: "Scholarships", path: "/resources/scholarship" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  const toggleMobileDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white py-3"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-5">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoMaram}
            alt="Maram Heritage Logo"
            className="h-9 md:h-10 w-auto object-contain"
          />
          <span className="font-heading text-sm md:text-base text-primary/70 hidden sm:block">
            Heritage
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLists.map((list, index) => (
            <div key={index} className="relative group">
              {!list.submenu ? (
                <NavLink
                  to={list.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 hover:text-accent ${isActive ? "text-accent" : "text-primary/80"}`
                  }
                >
                  {list.name}
                </NavLink>
              ) : (
                <>
                  <button className="text-sm font-medium text-primary/80 hover:text-accent transition-colors duration-200 flex items-center gap-1">
                    {list.name}
                    <svg
                      className="w-3 h-3 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-soft-gray opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {list.submenu.map((item, idx) => (
                      <NavLink
                        key={idx}
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-warm-cream hover:text-accent ${isActive ? "text-accent bg-warm-cream" : "text-primary/70"}`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="flex items-center gap-3 ml-2">
            {user ? (
              <>
                {(user.role === "admin" || user.role === "superadmin") && (
                  <Link
                    to="/dashboard"
                    className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium border border-accent text-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium bg-accent text-white px-5 py-2 rounded-lg hover:bg-accent-dark transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center p-2 rounded-lg text-primary hover:bg-warm-cream transition-colors"
        >
          {isMenuOpen ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-[56px] left-0 w-full bg-white shadow-lg z-50 max-h-[calc(100vh-56px)] overflow-y-auto border-t border-soft-gray">
          <div className="py-2">
            {navLists.map((list, index) => (
              <div key={index}>
                {!list.submenu ? (
                  <NavLink
                    to={list.path}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-sm font-medium transition-colors ${isActive ? "text-accent bg-warm-cream" : "text-primary/80 hover:bg-warm-cream"}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {list.name}
                  </NavLink>
                ) : (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(list.name)}
                      className="w-full flex justify-between items-center px-6 py-3 text-sm font-medium text-primary/80 hover:bg-warm-cream transition-colors"
                    >
                      {list.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === list.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === list.name && (
                      <div className="bg-warm-cream/50">
                        {list.submenu.map((item, idx) => (
                          <NavLink
                            key={idx}
                            to={item.path}
                            className={({ isActive }) =>
                              `block px-10 py-2.5 text-sm transition-colors ${isActive ? "text-accent font-medium" : "text-primary/60 hover:text-accent"}`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="border-t border-soft-gray px-6 py-4">
              {user ? (
                <div className="flex flex-col gap-2">
                  {(user.role === "admin" || user.role === "superadmin") && (
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-center text-sm font-medium bg-accent text-white px-4 py-2.5 rounded-lg"
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-sm font-medium border border-accent text-accent px-4 py-2.5 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center text-sm font-medium bg-accent text-white px-4 py-2.5 rounded-lg"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
