import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />   
    <Main />
  </React.StrictMode>
);