
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Simple initialization that's less prone to errors
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
