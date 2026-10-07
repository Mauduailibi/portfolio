import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import App from './App';
import { PrefsProvider } from './lib/prefs';
import { initAnalytics } from './lib/analytics';
import './index.css';

initAnalytics();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <PrefsProvider>
        <App />
      </PrefsProvider>
    </MotionConfig>
  </StrictMode>,
);
