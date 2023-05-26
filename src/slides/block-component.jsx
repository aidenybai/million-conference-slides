import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { bodyClassNameAtom } from '../layout';
import { highlight, languages } from 'prismjs/components/prism-core';
import dedent from 'dedent';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

export default () => {
  const [_, setClassName] = useAtom(bodyClassNameAtom);
  const [code, setCode] = useState(
    dedent`function Rickroll() {
      if (Math.random() > 0.5) {
        return (
          <p>Unless you're <b>Angular.js</b></p>
        );
      }
      return (
        <div>
          <img src="/rickroll.gif" />
          Never gonna give you up
        </div>
      );
    }

    const RickrollBlock = block(Rickroll)`
  );

  useEffect(() => {
    setClassName(() => 'bg-white');
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        ease: 'easeInAndOut',
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="text-5xl text-center flex justify-center items-center gap-5 leading-normal"
    >
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={5}
        className="font-mono text-2xl"
        data-line="1"
      />
    </motion.div>
  );
};
