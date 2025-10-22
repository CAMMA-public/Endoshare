import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import './index.css';

/**
 * Scroll to hash after route changes. Retries for a short time because
 * the target element might not be in the DOM at the first tick.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20;    // ~400ms total with 20ms steps
    const stepMs = 20;

    const tryScroll = () => {
      // If there is a hash, try to scroll to it; otherwise go to top
      if (hash) {
        const selector = decodeURIComponent(hash);
        const el = document.querySelector(selector);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        if (attempts++ < maxAttempts) {
          setTimeout(tryScroll, stepMs);
          return;
        }
      }
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Defer to next frame so the new route can render
    requestAnimationFrame(tryScroll);
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);