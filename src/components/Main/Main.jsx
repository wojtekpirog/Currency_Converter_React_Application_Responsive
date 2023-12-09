import React from 'react';
import ConverterHeader from './ConverterHeader/ConverterHeader';
import AmountInput from './AmountInput/AmountInput';
import SelectContainer from './SelectContainer/SelectContainer';
import ConvertButton from './ConvertButton/ConvertButton';
import ResultBox from './ResultBox/ResultBox';
import SocialBox from './SocialBox/SocialBox';
import fbLogo from '../../assets/images/facebook.svg';
import igLogo from '../../assets/images/instagram.svg';
import inLogo from '../../assets/images/linkedin.svg';
import ghLogo from '../../assets/images/github.svg';

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
          <h2>You can find the developer at:</h2>
          <div className="socialMedia flex">
            <SocialBox className="facebookLink" imageFile={fbLogo} altText="facebook link"/>
            <SocialBox className="instagramLink" imageFile={igLogo} altText="instagram link"/>
            <SocialBox className="linkedinLink" imageFile={inLogo} altText="linkedin link"/>
            <SocialBox className="githubLink" imageFile={ghLogo} altText="github link"/>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Main;