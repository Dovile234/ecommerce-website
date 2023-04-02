import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { ProductsList } from "../components/productsList";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const [discount, setDiscount] = useState("");
  const [isDiscount, setIsDiscount] = useState(false);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const discountHandler = (event) => {
    event.preventDefault();
    setIsDiscount(true);
    setDiscount("");
  };
  return (
    <div className="cart-container">
      <div className="go-back-wrap">
        <div className="go-back-section">
          <Link to="/shop/all">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="xs"
              style={{ paddingRight: "5px" }}
            />{" "}
            Back
          </Link>

          <p>Shopping Cart</p>
        </div>
      </div>
      <div className="cart">
        {totalAmount > 0 ? (
          <div className="cart-wrap">
            <div className="cart-items">
              <div className="items-info">
                <span>Product</span>
                <span>Quantity</span>
                <span className="end">Price</span>
                <span className="end">Total</span>
              </div>
              {ProductsList.map(
                (product, index) =>
                  cartItems[product.id] !== 0 && (
                    <CartItem key={index} data={product} />
                  )
              )}
            </div>

            <div className="checkout-wrap">
              <div className="checkout">
                <h4>Order Summary</h4>
                <p>
                  Total (Incl. Tax): <span>{totalAmount}€</span>
                </p>
                <p>
                  Shipping : <span>4€</span>
                </p>
                {isDiscount && (
                  <p className="discount-alert">
                    Discount <span>-10€</span>
                  </p>
                )}
                <h5>Enter coupon code</h5>
                <form onSubmit={discountHandler}>
                  <input
                    type="text"
                    required
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                  <button type="submit" className="coupon-btn">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                  </button>
                </form>
                {isDiscount && (
                  <p className="discount-alert">Discount applied</p>
                )}

                <button className="checkout-btn">Checkout</button>
                <Link to="/shop/all">Continue Shopping</Link>
              </div>
            </div>
          </div>
        ) : (
          <h3>Shopping Cart Is Empty</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
