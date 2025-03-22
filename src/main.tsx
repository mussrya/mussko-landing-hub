
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Use a consistent approach to finding the root element
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Failed to find the root element");
}
