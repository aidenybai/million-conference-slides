import { useState } from 'react';
import Splash from './components/splash';
import Layout from './components/layout';
import { Shortcut } from '@shopify/react-shortcuts';

const SLIDES = [Splash];

function App() {
  const [slide, setSlide] = useState(0);
  const Slide = SLIDES[slide];

  return (
    <>
      <Layout slide={slide}>
        <Slide />
      </Layout>
      <Shortcut
        ordered={['ArrowLeft']}
        onMatch={() => {
          if (slide !== 0) {
            setSlide((slide) => slide - 1);
          }
        }}
      />
      <Shortcut
        ordered={['ArrowRight']}
        onMatch={() => {
          if (slide !== SLIDES.length - 1) {
            setSlide((slide) => slide + 1);
          }
        }}
      />
      <Shortcut
        ordered={['Space']}
        onMatch={() => {
          console.log('hi');
          if (slide !== SLIDES.length - 1) {
            setSlide((slide) => slide + 1);
          }
        }}
      />
    </>
  );
}

export default App;
