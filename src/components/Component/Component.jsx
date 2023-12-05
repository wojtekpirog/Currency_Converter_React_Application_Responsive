import React from 'react';
import component from './component.module.css';

function Component() {
  return (
    <React.Fragment>
      <h2 className={component.subtitle}>Nagłówek Drugiego Stopnia</h2>
      <h3>Nagłówek Trzeciego Stopnia</h3>      
    </React.Fragment>
  );
}

export default Component;