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
        <img src="/pfp.jpeg" className="w-10 h-10 rounded-full" />
        <p className="text-white/40 text-xl font-medium">Aiden Bai</p>
      </div>
      <h1 className="text-8xl font-extrabold text-white">
        Virtual DOM: <br />
        <span className="text-9xl bg-gradient-to-r from-[#b37adb] to-[#e59db0] bg-clip-text text-transparent">
          Back in Block
        </span>
      </h1>
      <p className="text-white/40 text-lg font-medium">
        <span>
          {params.name ?? 'SeattleJS Meetup'} • {new Date().toLocaleDateString()}
        </span>
      </p>
    </motion.div>
  );
};
