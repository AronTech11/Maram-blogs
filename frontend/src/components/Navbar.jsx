import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import AvaterImg from "../assets/mb.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

// Navigation items with dropdown example
const navLists = [
  // { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "About Maram",
    submenu: [
      { name: "Education", path: "/about-maram/education" },
      { name: "News", path: "/about-maram/news" },
      { name: "MKS", path: "/about-maram/mks" },
      { name: "Maram Union", path: "/about-maram/maram-union" },
      { name: "Festival", path: "/about-maram/festival" },
      { name: "Village", path: "/about-maram/village" },
      { name: "Culture", path: "/about-maram/culture" },
    ],
  },
  {
    name: "Resources",
    submenu: [
      { name: "Career Guidance and Counselling Forum", path: "/resources/career-guidance" },
      { name: "Scholarship", path: "/resources/scholarship" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  // Toggle menu state for mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Logout handler
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  // Dropdown menu for Ant Design
  const renderDropdown = (submenu) => (
    <Menu>
      {submenu.map((item, idx) => (
        <Menu.Item key={idx}>
          <NavLink to={item.path} className="block px-4 py-2">
            {item.name}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header className="bg-white py-4 border-b">
      <nav className="container mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <Link to="/">
          <img src={AvaterImg} alt="logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {navLists.map((list, index) => (
            <p key={index}>
              {/* Normal Link */}
              {!list.submenu ? (
                <NavLink
                  to={list.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {list.name}
                </NavLink>
              ) : (
                // Dropdown
                <Dropdown
                  overlay={renderDropdown(list.submenu)}
                  trigger={["hover"]}
                  key={index}
                >
                  <a href="#" className="flex items-center gap-1">
                    {list.name}
                    <DownOutlined />
                  </a>
                </Dropdown>
              )}
            </p>
          ))}

          {/* Conditional Rendering for User/Guest */}
          {user ? (
            <p className="flex gap-3 items-center">
              {user.role === "admin" && (
                <Link to="/dashboard">
                  <button className="bg-blue-600 px-4 py-1.5 text-white rounded-sm">
                    Dashboard
                  </button>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="bg-blue-600 px-4 py-1.5 text-white rounded-sm"
              >
                Logout
              </button>
            </p>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center px-3 py-2 bg-gray-200 rounded text-gray-600"
        >
          {isMenuOpen ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-[64px] left-0 w-full bg-white shadow-sm z-50 max-h-screen overflow-y-auto">
          {navLists.map((list, index) => (
            <p key={index} className="border-b p-4">
              <NavLink
                to={list.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {list.name}
              </NavLink>

              {/* Mobile dropdown */}
              {list.submenu && (
                <div className="pl-4 mt-2 max-h-40 overflow-y-auto">
                  {list.submenu.map((item, idx) => (
                    <li key={idx} className="border-b p-2">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </div>
              )}
            </p>
          ))}
          {user ? (
            <p className="p-4">
              <button
                onClick={handleLogout}
                className="bg-blue-600 px-4 py-1.5 text-white rounded-sm"
              >
                Logout
              </button>
            </p>
          ) : (
            <p className="p-4">
              <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </NavLink>
            </p>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
