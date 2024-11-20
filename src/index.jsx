//frontend/src/index.jsx
//entry point for the frontend
// JavaScript file that loads RenJS, the game configuration, and starts the game.


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/App.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
