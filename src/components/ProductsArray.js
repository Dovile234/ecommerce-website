import React, { useState } from "react";
import chair from "../assets/chair1.jpg";
import chair2 from "../assets/chair2.jpg";
import chair3 from "../assets/chair3.jpg";
import table from "../assets/table.jpg";
import table2 from "../assets/table2.jpg";
import table3 from "../assets/table3.jpg";
import lighting from "../assets/lighting1.jpg";
import lighting2 from "../assets/lighting2.jpg";
import lighting3 from "../assets/lighting3.jpg";
import armchair from "../assets/armchair.jpg";
import sofa from "../assets/sofa.jpg";
import sofa2 from "../assets/sofa2.jpg";
import sofa3 from "../assets/sofa3.jpg";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import Item from "./Item";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductsArray = () => {
  let { id } = useParams();

  const products = [
    {
      title: "Dark grey chair with wood legs",
      price: "99€",
      availability: "in stock",
      image: chair,
      id: v4,
      category: "chairs",
    },
    {
      title: "Light blue chair with ash wood legs",
      price: "99€",
      availability: "in stock",
      image: chair2,
      id: v4,
      category: "chairs",
    },
    {
      title: "Green chair with solid ash wood legs",
      price: "99€",
      availability: "in stock",
      image: chair3,
      id: v4,
      category: "chairs",
    },
    {
      title: "Oak wood desk with metal legs",
      price: "99€",
      availability: "in stock",
      image: table,
      id: v4,
      category: "tables",
    },
    {
      title: "Solid oak wood coffee table",
      price: "99€",
      availability: "out of stock",
      image: table2,
      id: v4,
      category: "tables",
    },
    {
      title: "Oak wood desk with metal legs",
      price: "99€",
      availability: "in stock",
      image: table3,
      id: v4,
      category: "tables",
    },
    {
      title: "Yellow armchair with dark finish legs",
      price: "99€",
      availability: "in stock",
      image: armchair,
      id: v4,
      category: "chairs",
    },
    {
      title: "Bedside table lamp",
      price: "99€",
      availability: "in stock",
      image: lighting,
      id: v4,
      category: "lighting",
    },
    {
      title: "Wall lamp",
      price: "99€",
      availability: "in stock",
      image: lighting2,
      id: v4,
      category: "lighting",
    },
    {
      title: "Hanging lamp",
      price: "99€",
      availability: "in stock",
      image: lighting3,
      id: v4,
      category: "lighting",
    },
    {
      title: "White cotton sofa",
      price: "99€",
      availability: "in stock",
      image: sofa,
      id: v4,
      category: "sofas",
    },
    {
      title: "Yellow leather sofa",
      price: "99€",
      availability: "in stock",
      image: sofa2,
      id: v4,
      category: "sofas",
    },
    {
      title: "Green sofa",
      price: "99€",
      availability: "in stock",
      image: sofa3,
      id: v4,
      category: "sofas",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;
  let pages = [];

  const lastExerciseIndex = currentPage * exercisesPerPage;
  const firstExerciseIndex = lastExerciseIndex - exercisesPerPage;
  const currentExercise = products.slice(firstExerciseIndex, lastExerciseIndex);

  for (let i = 1; i <= Math.ceil(products.length / exercisesPerPage); i++) {
    pages.push(i);
  }
  const pagination = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 420, behavior: "smooth" });
  };
  return (
    <div className="shop-products">
      <h2 className="shop-title">{id}</h2>
      <div className="products-container">
        {id &&
          products.map((product, index) =>
            product.category === id ? (
              <div key={index} className="product">
                <Item product={product} />
              </div>
            ) : (
              ""
            )
          )}
        {id &&
          currentExercise.map((product, index) =>
            "all" === id ? (
              <div key={index} className="product">
                <Item product={product} />
              </div>
            ) : (
              ""
            )
          )}
      </div>
      {"all" === id && products.length > 8 ? (
        <div className="pagination-wrap">
          <button
            className="arrow-button"
            onClick={() => pagination(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => pagination(page)}
              className={
                page === currentPage
                  ? "pagination-button active"
                  : "pagination-button"
              }
            >
              {page}
            </button>
          ))}
          <button
            className="arrow-button"
            onClick={() => pagination(currentPage + 1)}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductsArray;
