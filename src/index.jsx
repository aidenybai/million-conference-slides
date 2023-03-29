import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ShortcutProvider } from '@shopify/react-shortcuts';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShortcutProvider>
      <App />
    </ShortcutProvider>
  </StrictMode>
);
