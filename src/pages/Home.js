import React from "react";
import { Link } from "react-router-dom";
import BestSellers from "../components/BestSellers";
import ImageWithText from "../components/ImageWithText";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="title">
          <h1 className="hero-title">Discover our new products for 2023</h1>
          <Link href="/shop" className="hero-button">
            Shop now
          </Link>
        </div>
      </section>
      <section className="container">
        <BestSellers />
      </section>
      <section className="bg-color">
        <ImageWithText />
      </section>
      <section className="newsletter">
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;