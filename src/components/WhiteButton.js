import React from "react";
import { Link } from "react-router-dom";

const whiteButton = ({ text, link }) => (
  <Link className="white-button" to={link}>
    {text}
  </Link>
);

export default whiteButton;
