import React from "react";
import error from "../assets/404Error.svg";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="bg-image"></div>
      <div className="error-image-wrapper">
        <img className="error-image" src={error} alt="page not found" />
      </div>
    </div>
  );
};

export default ErrorPage;
