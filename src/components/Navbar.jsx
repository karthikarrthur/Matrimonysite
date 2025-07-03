import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";
import Logo from "../components/Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/about", label: "About" },
    { to: "/help", label: "Help" },
    { to: "/contact", label: "Contact" },
    { to: "/my-profile", label: "My Profile" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo size="h-20" />

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-700 font-semibold border-b-2 border-purple-700 pb-1"
                    : "text-gray-600 hover:text-purple-700 hover:scale-105 transition-all duration-200"
                }
              >
                {link.label === "My Profile" ? (
                  <div className="flex items-center gap-1">
                    <UserCircle className="w-5 h-5" />
                    <span>{link.label}</span>
                  </div>
                ) : (
                  link.label
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex space-x-3">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 text-sm font-semibold text-purple-700 border border-purple-700 rounded-full hover:bg-purple-50 transition-all duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="px-4 py-2 text-sm font-semibold text-white bg-purple-700 rounded-full hover:bg-purple-800 transition-all duration-200"
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-700 font-semibold"
                  : "block text-gray-700 hover:text-purple-700 transition"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <hr className="border-gray-200" />

          <div className="flex flex-col space-y-2">
            {user ? (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                  className="w-full px-4 py-2 text-sm font-semibold text-purple-700 border border-purple-700 rounded-full hover:bg-purple-50 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/register");
                  }}
                  className="w-full px-4 py-2 text-sm font-semibold text-white bg-purple-700 rounded-full hover:bg-purple-800 transition"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
