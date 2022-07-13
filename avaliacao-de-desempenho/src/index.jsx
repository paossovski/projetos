import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import Rotes from './routes'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotes/>
  </React.StrictMode>
);
