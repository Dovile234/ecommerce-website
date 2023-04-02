import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CartItem = (props) => {
  const { id, image, title, price } = props.data;
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cart-item-wrap">
      <img className="cart-item-image" src={image} alt="product" />
      <div className="cart-item">
        <Link
          className="cart-item-title"
          to={`/product/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {title}
        </Link>
        <div className="count-handler">
          <button onClick={() => removeFromCart(id)}>
            <FontAwesomeIcon icon={faMinus} size="2xs" />
          </button>
          <input
            type="text"
            step="1"
            min="1"
            max="10"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>
            <FontAwesomeIcon icon={faPlus} size="2xs" />
          </button>
        </div>
        <span>{price}€</span>
        <span>{price * cartItems[id]}€</span>
      </div>
    </div>
  );
};

export default CartItem;
