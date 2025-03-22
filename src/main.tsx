
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Failed to find the root element");
  }
});
