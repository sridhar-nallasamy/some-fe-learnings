import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './containers/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider {...{ router }} />
  </StrictMode>
);
