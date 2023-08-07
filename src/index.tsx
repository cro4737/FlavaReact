import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './script/reportWebVitals';

import Header from './component/Header';
import RouteList from './component/RouteList';

import './css/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Header/>
      <RouteList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();