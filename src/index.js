import React from 'react';
import { createRoot } from 'react-dom/client';
import Pages from './pages';
import './index.css';

const root = createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
      <Pages/>
  </React.StrictMode>
);
