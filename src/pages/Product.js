import React from "react";
import { useParams } from "react-router-dom";
import ProductsResults from "../components/ProductsResults";

const Product = () => {
  let { item } = useParams();

  return (
    <div>
      <ProductsResults item={item} />
    </div>
  );
};

export default Product;
