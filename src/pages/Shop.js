import React from "react";
import Filter from "../components/Filter";
import ImageSlider from "../components/ImageSlider";
import image1 from "../assets/top-image1.jpg";
import image2 from "../assets/top-image2.jpg";
import image3 from "../assets/top-image3.jpg";
import ProductsResults from "../components/ProductsResults";

const Shop = () => {
  const slides = [
    { url: image3, id: 0, link: "/shop/tables", class: "image third" },
    { url: image1, id: 1, link: "/shop/lighting", class: "image first" },
    { url: image2, id: 2, link: "/shop/sofas", class: "image second" },
  ];

  return (
    <div className="top-section-wrapper">
      <div className="top-section">
        <ImageSlider slides={slides} />
      </div>
      <div>
        <Filter />
      </div>
      <section className="container">
        <ProductsResults />
      </section>
    </div>
  );
};

export default Shop;
