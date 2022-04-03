import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            THE PERFECT MIX
            <i class="fas fa-mortar-pestle" />
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
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
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
              <Link
                to="/cart"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Place Order
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/gallery">
              <Button buttonStyle="btn--primary">
                Gallery <i class="fas fa-mortar-pestle" />
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
