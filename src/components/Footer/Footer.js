import React from "react";
import {FooterContainer, FooterSubscription, FooterSubscriptionHeading, FooterSubscriptionText, InputAreas, FooterInput, FooterLinks, FooterLinkWrapper, FooterLinkItems,  }"./Footer.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--primary">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Address</h2>
            <p>Av Mexico 2097, Guadalajara, Jalisco, Mexico 44600</p>
          </div>
          <div class="footer-link-items">
            <h2>Hours</h2>
            <p>
              Monday - Thursday 10:00AM - 11:00PM Friday - Saturday 11:00 -
              3:00AM Sunday: Closed
            </p>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <p>Phone Number: 33 3630 2532 Email: theperfectmix@business.com</p>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              THE PERFECT MIX
              <i class="fas fa-mortar-pestle" />
            </Link>
          </div>
          <small class="website-rights">
            THE PERFECT MIX © {new Date().getFullYear()}
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
