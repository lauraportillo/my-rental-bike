import React from 'react';
import ReactDOM from'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { BikesApp } from './BikesApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <BikesApp />
    </HashRouter>
  </React.StrictMode>
);