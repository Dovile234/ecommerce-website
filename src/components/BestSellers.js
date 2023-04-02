import React from "react";
import chair from "../assets/chair1.jpg";
import chair2 from "../assets/chair2.jpg";
import chair3 from "../assets/chair3.jpg";
import table from "../assets/table.jpg";
import table2 from "../assets/table2.jpg";
import table3 from "../assets/table3.jpg";
import lighting2 from "../assets/lighting2.jpg";
import armchair from "../assets/armchair.jpg";
import Item from "./Item";

const BestSellers = () => {
  const products = [
    {
      title: "Dark grey chair with wood legs",
      price: 99,
      availability: "in stock",
      image: chair,
      id: 1,
    },
    {
      title: "Light blue chair with ash wood legs",
      price: 99,
      availability: "in stock",
      image: chair2,
      id: 2,
    },
    {
      title: "Green chair with solid ash wood legs",
      price: 99,
      availability: "in stock",
      image: chair3,
      id: 3,
    },
    {
      title: "Oak wood desk with metal legs",
      price: 99,
      availability: "in stock",
      image: table,
      id: 4,
    },
    {
      title: "Solid oak wood coffee table",
      price: 99,
      availability: "out of stock",
      image: table2,
      id: 5,
    },
    {
      title: "Oak wood desk with metal legs",
      price: 99,
      availability: "in stock",
      image: table3,
      id: 6,
    },
    {
      title: "Yellow armchair with dark finish legs",
      price: 99,
      availability: "in stock",
      image: armchair,
      id: 7,
      category: "chairs",
      description:
        "This armchair is a stylish and comfortable addition to any living space. Its clean lines and modern design make it a versatile piece of furniture that can complement a variety of decor styles.",
    },
    {
      title: "Wall lamp",
      price: 99,
      availability: "in stock",
      image: lighting2,
      id: 9,
      category: "lighting",
      description:
        "Hanging lamps can be used in a variety of settings, from kitchens and dining rooms to living rooms and bedrooms. They are versatile and stylish lighting option that can add both functionality and visual appeal to any room in your home.",
    },
  ];

  return (
    <div className="best-sellers">
      <h2 className="section-title">THE MUST HAVES FOR YOUR LIVING ROOM</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product">
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
