import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-text-wrap">
        <h4>Our Newsletter</h4>
        <p>
          Get E-mail updates about our exclusive promotions and new collections
        </p>
      </div>
      <form className="email-input">
        <input type="email" />
        <button>
          Subscribe
          <FontAwesomeIcon
            icon={faArrowRight}
            size="sm"
            style={{ paddingLeft: "9px", color: "white" }}
          />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
