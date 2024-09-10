import React from "react";
import "./footer.styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-heading">Come Visit Us</h2>
      <div className="footer-content">
        <div className="footer-wrapper">
          <div className="footer-items">
            <h2>Address</h2>
            <p>Av Mexico 2097, Guadalajara, Jalisco, Mexico 44600</p>
          </div>
          <div className="footer-items">
            <h2>Hours</h2>
            <p>
              Monday - Thursday 10:00AM - 11:00PM Friday - Saturday 11:00 -
              3:00AM Sunday: Closed
            </p>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-items">
            <h2>Contact Us</h2>
            <p>Phone Number: 33 3630 2532 Email: theperfectmix@business.com</p>
          </div>
          <div className="footer-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <div className="social-logo">
              THE PERFECT MIX
              <i className="fas fa-mortar-pestle footer-icon" />
            </div>
          </div>
          <small className="website-rights">
            THE PERFECT MIX © {new Date().getFullYear()}
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
