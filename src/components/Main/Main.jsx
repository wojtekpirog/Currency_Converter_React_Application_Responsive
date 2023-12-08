import React from 'react';
import ConverterHeader from './ConverterHeader/ConverterHeader';
import AmountInput from './AmountInput/AmountInput';
import main from './main.module.css';

function Main() {
  return (
    <React.Fragment>
      <main>
        <h1>Quickly <span className={main.exchange}>exchange</span> your money here:</h1>  
        <section>
          <div className={main.converterWrapper}>
            <ConverterHeader />
            <main>
              <AmountInput />
            </main>
          </div>
        </section>
      </main>      
    </React.Fragment>
  );
}

export default Main;