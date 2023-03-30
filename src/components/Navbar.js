import {
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 26) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header id={navbar ? "active" : ""}>
      <div className="container">
        <div className="header-wrap">
          <div className="main-logo">
            <Link to="/">
              <p className={navbar ? "logo color" : "logo "}>FURNITURE.</p>
            </Link>
          </div>
          <nav id="navbar" className={isOpen ? "active" : ""}>
            <ul className="navbar">
              <li>
                <NavLink
                  className={navbar ? "underline color" : "underline"}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={navbar ? "underline color" : "underline"}
                  to="/shop/all"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={navbar ? "underline color" : "underline"}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={navbar ? "underline color" : "underline"}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon
                    className={navbar ? "dark" : "white"}
                    icon={faBagShopping}
                    size="lg"
                  />
                </Link>
              </li>
              <li id="close">
                <button onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "white" }}
                    size="xl"
                  />
                </button>
              </li>
            </ul>
          </nav>
          <div id="mobile">
            <Link>
              <FontAwesomeIcon
                className={navbar ? "dark" : "white"}
                icon={faBagShopping}
                size="lg"
              />
            </Link>
            <button
              className={navbar ? "dark" : "white"}
              onClick={() => setIsOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} size="2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
