import React from "react";
import aboutImage from "../assets/about-image.jpg";

const About = () => {
  return (
    <div className="about-page-wrap">
      <div className="introduction-wrap">
        <div className="introduction">
          <h1>About us</h1>
          <p>
            Welcome to our furniture shop, where we specialize in providing
            high-quality, natural-style furniture for your home or office. Our
            passion for creating beautiful, sustainable furniture is at the
            heart of everything we do.
          </p>
        </div>
      </div>
      <section className="about-middle-section">
        <img src={aboutImage} alt="furniture" />
        <div className="about-text">
          <h3>Discover Stylish and Sustainable Furniture</h3>
          <p>
            We understand that when it comes to furnishing your living space,
            you want pieces that are both stylish and functional. That's why we
            have carefully curated a collection of furniture that is not only
            beautiful, but also crafted from the highest quality natural
            materials. From rustic wooden dining tables to sleek modern sofas,
            our pieces are designed to stand the test of time and elevate any
            space.
          </p>
          <p>
            At our shop, we are committed to sustainability and ethical
            sourcing. We believe that furniture should not only look good, but
            also be good for the planet. That's why we work with local craftsmen
            who share our commitment to using sustainable materials and
            eco-friendly manufacturing practices.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
