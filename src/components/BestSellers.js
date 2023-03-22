import React from "react";
import chair from "../assets/chair1.jpg";
import chair2 from "../assets/chair2.jpg";
import chair3 from "../assets/chair3.jpg";
import table from "../assets/table.jpg";
import table2 from "../assets/table2.jpg";
import table3 from "../assets/table3.jpg";
import mirror from "../assets/mirror.jpg";
import armchair from "../assets/armchair.jpg";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BestSellers = () => {
  const products = [
    {
      title: "Dark grey chair with wood legs",
      price: "99€",
      availability: "in stock",
      image: chair,
      id: v4,
    },
    {
      title: "Light blue chair with ash wood legs",
      price: "99€",
      availability: "in stock",
      image: chair2,
      id: v4,
    },
    {
      title: "Green chair with solid ash wood legs",
      price: "99€",
      availability: "in stock",
      image: chair3,
      id: v4,
    },
    {
      title: "Oak wood desk with metal legs",
      price: "99€",
      availability: "in stock",
      image: table,
      id: v4,
    },
    {
      title: "Solid oak wood coffee table",
      price: "99€",
      availability: "out of stock",
      image: table2,
      id: v4,
    },
    {
      title: "Oak wood desk with metal legs",
      price: "99€",
      availability: "in stock",
      image: table3,
      id: v4,
    },
    {
      title: "Mirror with natural finish",
      price: "99€",
      availability: "in stock",
      image: mirror,
      id: v4,
    },
    {
      title: "Yellow armchair with dark finish legs",
      price: "99€",
      availability: "in stock",
      image: armchair,
      id: v4,
    },
  ];

  return (
    <div className="best-sellers">
      <h2>Best Sellers</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product">
            <Link to={`/product/${product.id}`}>
              <img
                className="product-image"
                alt="product"
                src={product.image}
              />
            </Link>
            <div className="description-wrap">
              <div className="description">
                <Link to={`/product/${product.id}`}>{product.title}</Link>
                <span>{product.price}</span>
              </div>
              <p>{product.availability}</p>
              <button className="add-button">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  style={{
                    color: "#414040",
                  }}
                  size="2xl"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
