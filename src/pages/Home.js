import React from "react";
import BestSellers from "../components/BestSellers";
import WhiteButton from "../components/WhiteButton";
import ImageWithText from "../components/ImageWithText";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="title">
          <h1 className="hero-title">Discover our new products for 2023</h1>
          <WhiteButton text={"Shop Now"} link={"/shop/all"} />
        </div>
      </section>
      <section className="container">
        <BestSellers />
      </section>
      <section className="bg-color">
        <ImageWithText />
      </section>
    </div>
  );
};

export default Home;
