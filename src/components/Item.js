import React from "react";
import { Link } from "react-router-dom";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <img className="product-image" alt="product" src={product.image} />
      </Link>
      <div className="description-wrap">
        <div className="description">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
          <span>{product.price}</span>
        </div>
        <p>{product.availability}</p>
      </div>
    </div>
  );
};

export default Item;
