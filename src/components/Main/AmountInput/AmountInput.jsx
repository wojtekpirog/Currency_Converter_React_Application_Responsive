import React from 'react';
import amountInput from './amountInput.module.css';

function AmountInput() {
  return (
    <React.Fragment>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" className={amountInput.amountInput} value="100" />      
    </React.Fragment>
  );
}

export default AmountInput;