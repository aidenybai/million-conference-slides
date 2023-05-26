import { useAtom } from 'jotai';
import { bodyClassNameAtom } from '../layout';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default () => {
  const [_, setClassName] = useAtom(bodyClassNameAtom);

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
    >
      <img src="/virtual-dom-is-pure-overhead.png" />
    </motion.div>
  );
};
