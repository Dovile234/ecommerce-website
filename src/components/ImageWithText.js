import React from "react";
import { Link } from "react-router-dom";
import sideImage from "../assets/side-image.jpg";

const ImageWithText = () => {
  return (
    <div>
      <div className="section-wrapper ">
        <div className="text-wrap">
          <h3>High quality, long lasting furniture</h3>
          <p>
            We believe that furniture should be more than just a functional item
            in your home, it should also be a work of art that brings warmth and
            character to your space. At our shop, we are committed to promoting
            sustainable living and providing our customers with quality products
            that are not only beautiful but also eco-friendly.
          </p>
          <Link to="/about">Read more</Link>
        </div>
        <img src={sideImage} alt="chair" />
      </div>
    </div>
  );
};

export default ImageWithText;
