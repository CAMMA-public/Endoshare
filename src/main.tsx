// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, useLocation } from 'react-router-dom';
import App from './App';
import './index.css';

/** Scroll to hash after navigation (retries briefly in case content renders late). */
function ScrollToHash() {
  const { pathname, hash } = useLocation() as unknown as { pathname: string; hash: string };

  React.useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20, stepMs = 20;

    const tryScroll = () => {
      if (hash) {
        const el = document.querySelector(decodeURIComponent(hash));
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
        if (attempts++ < maxAttempts) return void setTimeout(tryScroll, stepMs);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    requestAnimationFrame(tryScroll);
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToHash />
      <App />
    </HashRouter>
  </React.StrictMode>
);