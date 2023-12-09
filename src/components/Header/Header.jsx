import React, { useState } from 'react';
import coinImage from '../../assets/images/coin.svg';

function Header() {
  const [collapse, setCollapse] = useState(false);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  }

  return (
    <header>
      <nav className="pageHeader flex">
        <div className="navbar flex">
          <div className="pageLogo flex">
            <img src={coinImage} alt="page logo icon" />
            <span>exchange.me</span>
          </div>
          <button type="button" className="navbarToggler" onClick={toggleNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <ul className={`navbarLinks ${collapse ? "active" : "inActive"}`}>
          <li><a href="#" target="_blank" draggable="true">About Me</a></li>
          <li><a href="#" target="_blank" draggable="true">Features</a></li>
          <li><a href="#" target="_blank" draggable="true">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;