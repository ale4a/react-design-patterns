import React, { useState, useEffect } from "react";
import useShoppingCart from "./useShoppingCart";
import "./DPHook.css";

const DPHooks = () => {
  const { cart, addItem, removeItem, updateItemQuantity } = useShoppingCart();
  const [newValue, setNewValue] = useState(0);
  const [nextId, setNextId] = useState(0);

  const updateInput = ({ target }) => {
    const valueProduct = target.value;
    if (!!valueProduct) {
      setNewValue(valueProduct);
    } else {
      setNewValue(0);
    }
  };

  return (
    <div>
      <input type={"number"} onChange={updateInput} value={newValue}></input>
      <button
        className="btn btn-success"
        onClick={() => {
          addItem({ quantity: newValue, id: nextId, price: newValue * 2 });
          setNextId((prev) => prev + 1);
        }}
      >
        Add
      </button>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <p>
              <a>id: {item.id}</a>
              <br />
              <a>price: {item.price}</a>
              <br />
              <a>quantity: {item.quantity}</a>
              <br />
            </p>
            <button
              className="btn btn-red"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              Remove
            </button>
            <button
              className="btn btn-warming"
              onClick={() => updateItemQuantity(item.id, newValue)}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DPHooks;
