import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const emailInputHandler = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-text-wrap">
          <h4>Our Newsletter</h4>
          <p>
            Get E-mail updates about our exclusive promotions and new
            collections
          </p>
        </div>
        <form onSubmit={emailInputHandler} className="email-input">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <button type="submit">
            Subscribe
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              style={{ paddingLeft: "9px", color: "white" }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
