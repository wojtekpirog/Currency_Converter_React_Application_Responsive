import React from 'react';
// import arrowDownShort from '../../../assets/images/arrow-down-short.svg';

function SelectContainer({ id, label }) {
  return (
    <div className="selectContainer">
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        <option value="PLN">Polish Zloty</option>
        <option value="EUR">Euro</option>
      </select>
      {/* <div className="selectIcon flex">
        <img src={arrowDownShort} alt="currency select icon" />
      </div> */}
    </div>
  );
}

export default SelectContainer;