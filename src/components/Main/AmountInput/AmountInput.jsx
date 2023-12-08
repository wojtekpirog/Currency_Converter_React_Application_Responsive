import React from 'react';

function AmountInput() {
  return (
    <React.Fragment>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" className="amountInput" value="100" />      
    </React.Fragment>
  );
}

export default AmountInput;