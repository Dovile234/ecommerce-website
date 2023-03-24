import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="about footer-item">
            <h6>About</h6>
            <ul>
              <li>
                <a href="./">About us</a>
              </li>
              <li>
                <a href="./">Delivery Information</a>
              </li>
              <li>
                <a href="./">Privacy Policy</a>
              </li>
              <li>
                <a href="./">Terms & Conditions</a>
              </li>
              <li>
                <a href="./">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="account footer-item">
            <h6>My Account</h6>
            <ul>
              <li>
                <a href="./">Sign In</a>
              </li>
              <li>
                <a href="./">View Cart</a>
              </li>
              <li>
                <a href="./">My Wishlist</a>
              </li>
              <li>
                <a href="./">Track My Order</a>
              </li>
              <li>
                <a href="./">Help</a>
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
