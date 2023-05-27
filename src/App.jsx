import { useState } from 'react';
import Layout from './layout';

function App({ slideComponents }) {
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
