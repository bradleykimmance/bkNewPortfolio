import App from './App.tsx';
import { StrictMode } from 'react';
import './globals.css';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
