import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component from './component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Component name='dima' age={23}/>
  </React.StrictMode>
);


