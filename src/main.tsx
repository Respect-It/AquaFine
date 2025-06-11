import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
const startTime = performance.now();

// Initialize app
const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Log performance metrics
window.addEventListener('load', () => {
  const loadTime = performance.now() - startTime;
  console.log(`App loaded in ${loadTime.toFixed(2)}ms`);
  
  // Report Core Web Vitals
  if ('web-vital' in window) {
    // This would integrate with a real analytics service
    console.log('Core Web Vitals tracking enabled');
  }
});