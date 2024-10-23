import '@/shared/styles/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App.tsx';

// TODO: set shared import order

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
