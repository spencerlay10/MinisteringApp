import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LogInPage from './loginComponents/LogInPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogInPage />
  </StrictMode>
);
