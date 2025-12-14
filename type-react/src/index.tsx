// index.tsx file
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // It's best practice to omit the file extension
import './App.css'; // Import the new CSS file

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find the root element. Please ensure your index.html has an element with id='root'.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);