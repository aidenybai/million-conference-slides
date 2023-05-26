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
      className="text-7xl text-center flex flex-col justify-center items-center gap-5 leading-normal"
    >
      <p>
        <span className="font-bold">Block Virtual DOM</span>: Identify the
        dynamic, skip the static
      </p>
    </motion.div>
  );
};
