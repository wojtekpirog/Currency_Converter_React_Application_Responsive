import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Component from './components/Component/Component';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />   
    <Component />
  </React.StrictMode>
);