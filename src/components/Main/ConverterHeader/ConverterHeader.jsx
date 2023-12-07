import React from 'react';
import converterHeader from './converterHeader.module.css';
import cashAndCoinImage from '../../../assets/images/cash-coin.svg';

function ConverterHeader() {
  return (
    <div className={converterHeader.converterHeader}>
      <header>
        <img src={cashAndCoinImage} alt="cash and coin" />
        <h3>Currency Converter</h3>
      </header>
    </div>
  );
}

export default ConverterHeader;