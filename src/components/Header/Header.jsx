import { useState } from 'react';
import header from './header.module.css';
import coinImage from '../../assets/images/coin.svg';

function Header() {
  const [collapse, setCollapse] = useState(false);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  }

  return (
    <header>
      <nav className={`${header.pageHeader} ${header.flex}`}>
        <div className={`${header.navbar} ${header.flex}`}>
          <div className={`${header.pageLogo} ${header.flex}`}>
            <img src={coinImage} alt="page logo icon" />
            <span>exchange.me</span>
          </div>
          <button type="button" className={header.navbarToggler} onClick={toggleNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <ul className={header.navbarLinks}>
          <li><a href="#" target="_blank" draggable="true">About Me</a></li>
          <li><a href="#" target="_blank" draggable="true">Features</a></li>
          <li><a href="#" target="_blank" draggable="true">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;