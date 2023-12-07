import React from 'react';
import ConverterHeader from './ConverterHeader/ConverterHeader';
import main from './main.module.css';

function Main() {
  return (
    <React.Fragment>
      <main>
        <h1>Quickly <span className={main.exchange}>exchange</span> your money here:</h1>  
        <section>
          <div className={main.converterWrapper}>
            <ConverterHeader />
          </div>
        </section>
      </main>      
    </React.Fragment>
  );
}

export default Main;