import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ShortcutProvider } from '@shopify/react-shortcuts';
import App from './App';
import './index.css';

import SLIDES from './slides/_meta.json';

const slides = import.meta.glob('./slides/*.jsx');
const slideComponents = [];

const init = async () => {
  for (const slide of SLIDES) {
    try {
      const mod = await slides[`./slides/${slide}.jsx`]();
      if (Array.isArray(mod.default)) {
        slideComponents.push(...mod.default);
      } else {
        slideComponents.push(mod.default);
      }
    } catch (e) {
      console.warn(`Could not load slide ${slide} correctly`);
    }
  }
};

init().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ShortcutProvider>
        <App slideComponents={slideComponents} />
      </ShortcutProvider>
    </StrictMode>
  );
});
