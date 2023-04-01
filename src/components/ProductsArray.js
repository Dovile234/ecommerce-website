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
import Item from "./Item";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const ProductsArray = ({ item }) => {
  let { id } = useParams();
  const [similarProducts, setSimilarProducts] = useState();

  const products = [
    {
      title: "Dark grey chair with wood legs",
      price: "99€",
      availability: "in stock",
      image: chair,
      id: 1,
      category: "chairs",
      description:
        "This armchair is a stylish and comfortable addition to any living space. Its clean lines and modern design make it a versatile piece of furniture that can complement a variety of decor styles.",
    },
    {
      title: "Light blue chair with ash wood legs",
      price: "99€",
      availability: "in stock",
      image: chair2,
      id: 2,
      category: "chairs",
      description:
        "This armchair is a stylish and comfortable addition to any living space. Its clean lines and modern design make it a versatile piece of furniture that can complement a variety of decor styles.",
    },
    {
      title: "Green chair with solid ash wood legs",
      price: "99€",
      availability: "in stock",
      image: chair3,
      id: 3,
      category: "chairs",
      description:
        "This armchair is a stylish and comfortable addition to any living space. Its clean lines and modern design make it a versatile piece of furniture that can complement a variety of decor styles.",
    },
    {
      title: "Oak wood desk with metal legs",
      price: "99€",
      availability: "in stock",
      image: table,
      id: 4,
      category: "tables",
      description:
        "A wood desk is a classic and timeless piece of furniture that can add warmth and character to any home. It is made of solid wood and is a sturdy and functional piece of furniture. ",
    },
    {
      title: "Solid oak wood coffee table",
      price: "99€",
      availability: "out of stock",
      image: table2,
      id: 5,
      category: "tables",
      description:
        "A wood desk is a classic and timeless piece of furniture that can add warmth and character to any home. It is made of solid wood and is a sturdy and functional piece of furniture. ",
    },
    {
      title: "Oak wood desk with metal legs",
      price: "99€",
      availability: "in stock",
      image: table3,
      id: 6,
      category: "tables",
      description:
        "A wood desk is a classic and timeless piece of furniture that can add warmth and character to any home. It is made of solid wood and is a sturdy and functional piece of furniture. ",
    },
    {
      title: "Yellow armchair with dark finish legs",
      price: "99€",
      availability: "in stock",
      image: armchair,
      id: 7,
      category: "chairs",
      description:
        "This armchair is a stylish and comfortable addition to any living space. Its clean lines and modern design make it a versatile piece of furniture that can complement a variety of decor styles.",
    },
    {
      title: "Bedside table lamp",
      price: "99€",
      availability: "in stock",
      image: lighting,
      id: 8,
      category: "lighting",
      description:
        "Hanging lamps can be used in a variety of settings, from kitchens and dining rooms to living rooms and bedrooms. They are versatile and stylish lighting option that can add both functionality and visual appeal to any room in your home.",
    },
    {
      title: "Wall lamp",
      price: "99€",
      availability: "in stock",
      image: lighting2,
      id: 9,
      category: "lighting",
      description:
        "Hanging lamps can be used in a variety of settings, from kitchens and dining rooms to living rooms and bedrooms. They are versatile and stylish lighting option that can add both functionality and visual appeal to any room in your home.",
    },
    {
      title: "Hanging lamp",
      price: "99€",
      availability: "in stock",
      image: lighting3,
      id: 10,
      category: "lighting",
      description:
        "Hanging lamps can be used in a variety of settings, from kitchens and dining rooms to living rooms and bedrooms. They are versatile and stylish lighting option that can add both functionality and visual appeal to any room in your home.",
    },
    {
      title: "White cotton sofa",
      price: "99€",
      availability: "in stock",
      image: sofa,
      id: 11,
      category: "sofas",
      description:
        "Clean, sleek lines and minimalist design, with a focus on functionality and comfort. Designed with sustainability in mind, using eco-friendly materials and production methods.",
    },
    {
      title: "Yellow leather sofa",
      price: "99€",
      availability: "in stock",
      image: sofa2,
      id: 12,
      category: "sofas",
      description:
        "Clean, sleek lines and minimalist design, with a focus on functionality and comfort. Designed with sustainability in mind, using eco-friendly materials and production methods.",
    },
    {
      title: "Green sofa",
      price: "99€",
      availability: "in stock",
      image: sofa3,
      id: 13,
      category: "sofas",
      description:
        "Clean, sleek lines and minimalist design, with a focus on functionality and comfort. Designed with sustainability in mind, using eco-friendly materials and production methods.",
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

  useEffect(() => {
    const similarProductsArray = products.slice(1, 9);
    setSimilarProducts(similarProductsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {id && (
        <div className="shop-products">
          <h2 className="shop-title">{id}</h2>
          <div className="products-container">
            {products.map((product, index) =>
              product.category === id ? (
                <div key={index} className="product">
                  <Item product={product} />
                </div>
              ) : (
                ""
              )
            )}
            {currentExercise.map((product, index) =>
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
      )}
      {item && (
        <div className="item-wrap">
          <div className="diagonal">
            {products.map(
              (product, index) =>
                Number(item) === product.id && (
                  <div className="item" key={index}>
                    <img
                      className="item-image"
                      src={product.image}
                      alt="item"
                    />
                    <div className="item-details">
                      <h3>{product.title}</h3>
                      <p>{product.price}</p>
                      <div>
                        <input
                          type="number"
                          step="1"
                          min="1"
                          max="10"
                          defaultValue="1"
                        />
                        <button>Add to Cart</button>
                      </div>
                      <p className="description">{product.description}</p>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="similar-products-wrap">
            <h2>You may also like</h2>
            {similarProducts && (
              <div className="similar-items snaps-inline">
                {similarProducts.map((product, index) => (
                  <div className="product similar-item" key={index}>
                    <Item product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsArray;
