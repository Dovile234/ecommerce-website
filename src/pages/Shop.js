import React from "react";
import ProductsFilter from "../components/ProductsFilter";
import ImageSlider from "../components/ImageSlider";
import image1 from "../assets/top-image1.jpg";
import image2 from "../assets/top-image2.jpg";
import image3 from "../assets/top-image3.jpg";
import ProductsArray from "../components/ProductsArray";

const Shop = () => {
  const slides = [
    { url: image1, id: 0, link: "/shop/lighting", class: "image first" },
    { url: image2, id: 1, link: "/shop/sofas", class: "image second" },
    { url: image3, id: 2, link: "/shop/tables", class: "image third" },
  ];

  return (
    <div className="top-section-wrapper">
      <div className="top-section">
        <ImageSlider slides={slides} />
      </div>
      <div>
        <ProductsFilter />
      </div>
      <section className="container">
        <ProductsArray />
      </section>
    </div>
  );
};

export default Shop;
