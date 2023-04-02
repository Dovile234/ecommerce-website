import React, { createContext, useState } from "react";
import { ProductsList } from "../components/productsList";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ProductsList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ProductsList.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalAmount += cartItems[item];
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
