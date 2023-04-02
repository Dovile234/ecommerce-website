import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const messageHandler = (event) => {
    event.preventDefault();
    setMessage("");
    setEmail("");
    setName("");
  };

  return (
    <div className="contact-page-wrap">
      <div className="contact-wrap">
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.939356113881!2d23.890283115899095!3d54.939082180343604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e71f3188d6425d%3A0xdb828d9d5bbdf1b6!2sMega!5e0!3m2!1slt!2slt!4v1680347845540!5m2!1slt!2slt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="myFrame"
          ></iframe>
        </div>
        <div className="contact-info-wrap">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="lg"
                style={{ paddingRight: "10px" }}
              />
              Islandijos pl. 32, 47446 Kaunas
            </p>
            <p>
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                style={{ paddingRight: "10px" }}
              />
              +37064258935
            </p>

            <p>
              <FontAwesomeIcon
                icon={faClock}
                size="lg"
                style={{ paddingRight: "10px" }}
              />
              MON-FRI 9AM - 6PM
            </p>
          </div>
          <form onSubmit={messageHandler} className="contact-inputs">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows={4}
              cols={40}
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="message-button">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
