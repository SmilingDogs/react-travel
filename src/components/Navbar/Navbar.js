import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [styleNavbar, setStyleNavbar] = useState(false);
  const { pathname } = useLocation();

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

    return () => {
      window.removeEventListener("resize", showButton);
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setStyleNavbar(true);
    } else {
      setStyleNavbar(false);
    }
  };

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <nav className="navbar-container">
        <div
          className={
            styleNavbar && pathname === "/"
              ? "navbar active"
              : pathname === "/products"
              ? "navbar products"
              : pathname === "/services"
              ? "navbar services"
              : pathname === "/sign-up"
              ? "navbar signup"
              : pathname === "/watch"
              ? "navbar watch"
              : "navbar"
          }
        >
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL
            <i className="fab fa-typo3" />
          </Link>
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
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/sign-up">
              <Button buttonStyle="btn--outline">SIGN UP</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
