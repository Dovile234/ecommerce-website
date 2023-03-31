import React from "react";
import ProductsArray from "../components/ProductsArray";
import { useParams } from "react-router-dom";

const Product = () => {
  let { item } = useParams();

  return (
    <div>
      <ProductsArray item={item} />
    </div>
  );
};

export default Product;
