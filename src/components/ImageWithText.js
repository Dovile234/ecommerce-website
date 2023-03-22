import React from "react";
import { Link } from "react-router-dom";
import sideImage from "../assets/side-image.jpg";

const ImageWithText = () => {
  return (
    <div>
      <div className="section-wrapper ">
        <div className="text-wrap">
          <h3>High -quality, long -lasting furniture</h3>
          <p>
            Fugiat consequat voluptate ea veniam ipsum veniam anim laborum nisi
            sunt. Minim deserunt laboris enim ullamco consectetur cupidatat
            tempor reprehenderit laboris dolore pariatur culpa culpa consequat.
            Lorem amet do enim laborum commodo dolore occaecat.
          </p>
          <Link to="/about">Read more</Link>
        </div>
        <img src={sideImage} alt="chair" />
      </div>
    </div>
  );
};

export default ImageWithText;
