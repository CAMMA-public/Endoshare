import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import './index.css';

/**
 * Scroll to the element pointed by the URL hash after each navigation.
 * If no hash is present (or not found), scroll to top.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // try to scroll to an in-page anchor first
    if (hash) {
      // decode in case ids contain encoded chars
      const selector = decodeURIComponent(hash);
      const el = document.querySelector(selector);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // otherwise go to the top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Endoshare">
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);