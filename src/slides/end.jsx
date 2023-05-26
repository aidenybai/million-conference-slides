import { useAtom } from 'jotai';
import { bodyClassNameAtom } from '../layout';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

export default () => {
  const [_, setClassName] = useAtom(bodyClassNameAtom);

  useEffect(() => {
    setClassName(() => 'from-[#111] to-[#372f47] text-white');
  }, []);

  return (
    <motion.div
      className="flex flex-col text-center gap-10"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        ease: 'easeInAndOut',
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="flex items-center gap-2 mx-auto">
        <img src="/pfp.jpeg" className="w-10 h-10 rounded-full shadow-lg" />
        <p className="text-white/80 text-4xl font-medium shadow-lg">
          @aidenybai
        </p>
        <div className="mx-5" />
        <img src="/favicon.png" className="w-10 h-10 rounded-full shadow-lg" />
        <p className="text-white/80 text-4xl font-medium shadow-lg">
          million.dev
        </p>
      </div>
    </motion.div>
  );
};
