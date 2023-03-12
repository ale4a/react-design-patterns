import React, { useContext } from 'react'
import { CurrencyContext } from './Store';

const DPCurrency = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);
  
  const handleCurrency = (newCurrency) => {
    setCurrency(newCurrency)
  }

  return (
    <div>
      <h3>Current currency: {currency}</h3>
      <select onChange={(e)=>handleCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="BS">BS</option>
        <option value="MX">MX</option>
        <option value="EU">EU</option>
      </select>
    </div>
  )
}

export default DPCurrency