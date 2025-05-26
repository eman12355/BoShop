import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/Action/userActions";
import logo from "../Images/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.HandleCard.cartItems || []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    closeMenu();
    navigate("/login");
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="main-container">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width={150} height={31} />
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <FaTimes size={20} color="#2d3a4b" />
            ) : (
              <FaBars size={20} color="#2d3a4b" />
            )}
          </button>

          {/* Collapsible Menu */}
          <div
            className={`collapse navbar-collapse justify-content-between ${
              menuOpen ? "show" : ""
            }`}
            id="navbarContent"
          >
            <ul className="nav navbar-nav mx-auto text-center bg-white">
              <li className="nav-item">
                <NavLink
                  className="nav-css nav-link"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-css nav-link"
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-css nav-link"
                  to="/product"
                  onClick={closeMenu}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-css nav-link"
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <ul className="icons navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <Link
                  className="icon nav-link"
                  to="/search"
                  onClick={closeMenu}
                >
                  <FaSearch />
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link className="icon nav-link" to="/card" onClick={closeMenu}>
                  <FaShoppingCart />
                  {totalItems > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                      style={{ backgroundColor: "#2d3a4b", color: "white" }}
                    >
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <span
                    className="icon nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={handleLogout}
                  >
                    <FaUser />
                  </span>
                ) : (
                  <Link
                    className="icon nav-link"
                    to="/login"
                    onClick={closeMenu}
                  >
                    <FaUser />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
