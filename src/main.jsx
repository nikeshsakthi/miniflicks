import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css'




const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
);

