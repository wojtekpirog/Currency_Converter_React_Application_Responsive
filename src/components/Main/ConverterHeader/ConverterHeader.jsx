import React from 'react';
import cashAndCoinImage from '../../../assets/images/cash-coin.svg';

function ConverterHeader() {
  return (
    <div className="converterHeader">
      <header>
        <img src={cashAndCoinImage} alt="cash and coin" />
        <h3>Currency Converter</h3>
      </header>
    </div>
  );
}

export default ConverterHeader;