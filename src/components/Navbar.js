import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

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
              {/* <img src={logo} alt="logo" /> */}
              <p className={navbar ? "logo color" : "logo "}>FURNITURE.</p>
            </Link>
          </div>
          <nav>
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
                  to="/shop"
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
