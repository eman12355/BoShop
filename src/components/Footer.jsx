import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import footerLogo from "../Images/logo-foot.png";

const Footer = () => {
  return (
    <footer className="custom-footer text-white pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src={footerLogo}
              alt="BoShop Logo"
              className="mb-3 footer-logo"
            />
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              Street No. 12, New York 12
            </p>
            <p>
              <i className="fas fa-phone me-2"></i>
              1.800.123.456789
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              info@BoShop.com
            </p>
            <div className="social-icons ">
              <a href="#" className="me-3" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-3" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-3" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="footer-title text-white">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/features" className="footer-link">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/store" className="footer-link">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/press" className="footer-link">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="footer-title text-white">Account Info</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/store" className="footer-link">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link to="/features" className="footer-link">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="footer-link">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4 pt-3 border-top border-secondary text-center">
          <div className="col-12">
            <p className="mb-0">
              &copy; 2025 <strong>BoShop</strong>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
