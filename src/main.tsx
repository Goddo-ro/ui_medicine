import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';

import '@/shared/styles/index.scss';

import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
