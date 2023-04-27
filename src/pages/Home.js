import React, { useState } from "react";
import BestSellers from "../components/BestSellers";
import WhiteButton from "../components/WhiteButton";
import ImageWithText from "../components/ImageWithText";

const Home = () => {
  const [popup, setPopup] = useState(true);
  const closeHandler = () => {
    setPopup(false);
  };

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
      {popup && (
        <div className="popup">
          <h3>Sale</h3>
          <div className="right-section">
            <div className="number-wrap">
              <span className="number">30</span>
              <div className="discount-wrap">
                <span>%</span>
                <span>OFF</span>
              </div>
            </div>
            <p>
              Enter <span>DISCOUNT30</span> at checkout
            </p>
          </div>
          <button className="close" onClick={closeHandler}>
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
