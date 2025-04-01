import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  {/* ✅ Wrap App with ParallaxProvider */}
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
</StrictMode>
);
