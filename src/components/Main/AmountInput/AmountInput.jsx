import React from 'react';

function AmountInput() {
  return (
    <React.Fragment>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" className="amountInput" />      
    </React.Fragment>
  );
}

export default AmountInput;