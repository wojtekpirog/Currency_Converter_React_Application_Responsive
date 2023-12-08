import React from 'react';
import arrowRightShort from '../../../assets/images/arrow-right-short.svg';

function ConvertButton({ convertFunction }) {
  return (
    <button type="button" id="convertBtn"><span>Convert<img src={arrowRightShort} alt="arrow right short" /></span></button>    
  );
}

export default ConvertButton;