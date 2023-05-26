import { useAtom } from 'jotai';
import { bodyClassNameAtom, mainClassNameAtom } from '../layout';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default () => {
  const [_, setBodyClassName] = useAtom(bodyClassNameAtom);
  const [__, setMainClassName] = useAtom(mainClassNameAtom);

  useEffect(() => {
    setBodyClassName(() => '!h-full bg-white !p-0');
    setMainClassName(() => '!h-full !p-0');
  }, []);

  return (
    <motion.iframe
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        ease: 'easeInAndOut',
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="w-full h-screen m-0"
      src="https://demo.millionjs.org"
    />
  );
};
