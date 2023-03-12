import React, { useState, useEffect } from "react";

type product = {
  id: number;
  quantity: number;
  price: number;
};

const useShoppingCart = () => {
  const [cart, setCart] = useState<product[]>([]);

  const addItem = (item) => {
    const findingIndex = cart.findIndex((element) => item.id === element.id);
    if (findingIndex !== -1) {
      const updateCart = [...cart];
      updateCart[findingIndex].quantity = item.quantity;
      setCart(updateCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    const removeCart = cart.filter((item) => item.id !== id);
    setCart(removeCart);
  };

  const updateItemQuantity = (id, newQuantity) => {
    const updateQuantity = cart.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          quantity: newQuantity,
        };
      } else {
        return element;
      }
    });
    setCart(updateQuantity);
  };

  useEffect(() => {
    const dataSave = localStorage.getItem("shopping-cart");
    if (dataSave) {
      setCart(cart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, addItem, removeItem, updateItemQuantity };
};

export default useShoppingCart;
