import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { ProductsList } from "./productsList";
import { ShopContext } from "../context/ShopContext";

const ProductsResults = ({ item }) => {
  let { id } = useParams();
  const [similarProducts, setSimilarProducts] = useState();

  const { addToCart } = useContext(ShopContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  let pages = [];

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = ProductsList.slice(
    firstProductIndex,
    lastProductIndex
  );

  for (let i = 1; i <= Math.ceil(ProductsList.length / productsPerPage); i++) {
    pages.push(i);
  }
  const pagination = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 420, behavior: "smooth" });
  };

  useEffect(() => {
    const similarProductsArray = ProductsList.slice(1, 9);
    setSimilarProducts(similarProductsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {id && (
        <div className="shop-products">
          <h2 className="shop-title">{id}</h2>
          <div className="products-container">
            {ProductsList.map((product, index) =>
              product.category === id ? (
                <div key={index} className="product">
                  <Item product={product} />
                </div>
              ) : (
                ""
              )
            )}
            {currentProduct.map((product, index) =>
              "all" === id ? (
                <div key={index} className="product">
                  <Item product={product} />
                </div>
              ) : (
                ""
              )
            )}
          </div>
          {"all" === id && ProductsList.length > 8 ? (
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
            {ProductsList.map(
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
                      <p>{product.price}€</p>
                      <div>
                        {/* <input
                          type="number"
                          step="1"
                          min="1"
                          max="10"
                          defaultValue="1"
                        /> */}

                        <button onClick={() => addToCart(product.id)}>
                          Add to Cart
                        </button>
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

export default ProductsResults;
