import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Button } from "../Button/button.component";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./navbar.styles.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState();
  const { cart } = useContext(CartContext);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // handleClick to determine if the icon is clicked
  const handleClick = () => setClick(!click);

  // closeMobileMenu to close the mobile menu
  const closeMobileMenu = () => setClick(false);

  // Displays button if the screen is less than 960px
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Update cart count whenever cart changes
  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);
  }, [cart]);

  // To render the button
  useEffect(() => {
    showButton();
  }, []);

  // When the screen size changes, the button is displayed or not
  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);
  }, [cart]);

  const handleEmailClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Determine if the screen size is smaller than 25.125em (approx. 400px)
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 400);
  };

  // Runs on window resize and first render to check screen size
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={closeMobileMenu}>
          <Link to="/" className="logo">
            THE PERFECT MIX
            <i className="fas fa-mortar-pestle navbar-icon" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/main" className="nav-links" onClick={closeMobileMenu}>
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/beverages"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Beverages
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/desserts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Desserts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/appetizers"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Appetizers
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              <div className="cart-icon-wrapper">
                <i className="fas fa-shopping-cart" />
                <span className="cart-count">{cartCount}</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>
        </ul>

        <div className="nav-flex-container">
          {!isAuthenticated ? (
            <li className="nav-item">
              <span className="login-link" onClick={() => loginWithRedirect()}>
                Login
              </span>
            </li>
          ) : (
            <li className="nav-item">
              <div
                className={`user-dropdown ${
                  dropdownOpen ? "dropdown-open" : ""
                }`}
              >
                <span className="nav-email" onClick={handleEmailClick}>
                  {isSmallScreen ? (
                    <i className="fas fa-envelope" />
                  ) : (
                    user.email
                  )}
                </span>
                <div className="dropdown-content">
                  <Button
                    buttonStyle="btn--primary btn--medium"
                    className="logout"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </li>
          )}
        </div>

        {button && (
          <Link to="/gallery">
            <Button buttonStyle="btn--primary btn-medium btn-mobile">
              Gallery
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
