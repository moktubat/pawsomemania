import logo from "../../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Products"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Login
        </NavLink>
      </li>
    </>,
  ];
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src={logo} className="w-[42px]" alt="logo" />
          <span className="ml-2 text-xl font-bold tracking-wide text-[#f86ca7]">
            PawSome <br /> Mania
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">{navLinks}</ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineBars3BottomRight className="w-8 text-[#f86ca7]" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="text-xl font-bold tracking-wide text-[#f86ca7]">
                      PawSome <br /> Mania
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaXmark className="w-5 text-[#f86ca7]" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">{navLinks}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
