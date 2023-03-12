import React, { useState, createContext } from "react";

export const CurrencyContext = createContext();

const Store = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  return (
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      {children}
    </CurrencyContext.Provider>
  )
}
export default Store;
