//npm install react-router-dom
import React from 'react';
import {Link} from 'react-router-dom';

export default class Lesson extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Strona Główna</Link>
          </li>
          <li>
            <Link to="/articles">Artykuły</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    );
  }
}