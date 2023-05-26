import { useState } from 'react';
import Layout from './layout';
import SLIDES from './slides/_meta.json';

const slides = import.meta.glob('./slides/*.jsx');
const slideComponents = [];

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

function App() {
  const [slide, setSlide] = useState(0);
  const Slide = slideComponents[slide];

  const handleBackward = () => {
    if (slide !== 0) {
      setSlide((slide) => slide - 1);
    }
  };

  const handleForward = () => {
    if (slide !== slideComponents.length - 1) {
      setSlide((slide) => slide + 1);
    }
  };

  return (
    <>
      <Layout
        slide={slide}
        maxSlide={slideComponents.length - 1}
        handleBackward={handleBackward}
        handleForward={handleForward}
      >
        <Slide />
      </Layout>
    </>
  );
}

export default App;
