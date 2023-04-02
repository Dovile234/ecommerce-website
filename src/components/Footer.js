import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="about footer-item">
            <h6>About</h6>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/cart">Delivery Information</Link>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms & Conditions</p>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="account footer-item">
            <h6>My Account</h6>
            <ul>
              <li>
                <Link to="/cart">View Cart</Link>
              </li>
              <li>
                <Link to="/cart">My Wishlist</Link>
              </li>
              <li>
                <Link to="/cart">Track My Order</Link>
              </li>
            </ul>
          </div>
          <div className="contacts footer-item">
            <h6>Contact</h6>
            <p>Islandijos pl. 32, 47446 Kaunas</p>
            <p>Tel: +37064258935</p>
            <p>MON-FRI 9AM - 6PM</p>
          </div>
          <div className="footer-item">
            <div className="socials">
              <h5>FURNITURE.</h5>
              <div className="socials-buttons-wrap">
                <button>
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </button>
                <button>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </button>
                <button>
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">© Copyright 2023 FURNITURE.</p>
      </div>
    </footer>
  );
};

export default Footer;
