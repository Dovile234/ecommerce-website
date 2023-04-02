import {
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

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

  const { getCartAmount } = useContext(ShopContext);

  const totalCartNumber = getCartAmount();

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
              <li
                className={navbar ? "dark" : "white"}
                style={{ fontSize: "14px" }}
              >
                <Link to="/cart">
                  <FontAwesomeIcon
                    className={navbar ? "dark" : "white"}
                    icon={faBagShopping}
                    size="lg"
                    style={{ paddingRight: "3px" }}
                  />
                </Link>
                ({totalCartNumber})
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

          <div className={navbar ? "dark" : "white"} id="mobile">
            <Link>
              <FontAwesomeIcon
                className={navbar ? "dark" : "white"}
                icon={faBagShopping}
                size="lg"
              />
            </Link>
            ({totalCartNumber})
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
