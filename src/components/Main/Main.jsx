import React from 'react';
import ConverterHeader from './ConverterHeader/ConverterHeader';
import AmountInput from './AmountInput/AmountInput';
import SelectContainer from './SelectContainer/SelectContainer';
import ConvertButton from './ConvertButton/ConvertButton';
import ResultBox from './ResultBox/ResultBox';

function Main() {
  return (
    <React.Fragment>
      <main>
        <h1>Quickly <span className="exchange">exchange</span> your money here:</h1>  
        <section>
          <div className="converterWrapper">
            <ConverterHeader />
            <main>
              <AmountInput />
              <div className="currencySelection flex">
                <SelectContainer id="fromCurrency" label="From:"/>
                <SelectContainer id="toCurrency" label="To:"/>
              </div>
              <ConvertButton />
              <ResultBox />
            </main>
          </div>
        </section>
        <section>
          <h3>You can find the developer at:</h3>
          <div className="socialMedia"></div>
        </section>
      </main>
      <footer>
        &copy;exchange.me 2023
      </footer>
    </React.Fragment>
  );
}

export default Main;