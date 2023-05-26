import { useAtom } from 'jotai';
import { bodyClassNameAtom, mainClassNameAtom } from '../layout';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default () => {
  const [_, setBodyClassName] = useAtom(bodyClassNameAtom);
  const [__, setMainClassName] = useAtom(mainClassNameAtom);

  useEffect(() => {
    setBodyClassName(() => '!h-full bg-[#292b34] !p-0');
    setMainClassName(() => '!h-full !p-0');
  }, []);

  return (
    <motion.div>
      <img src="/graph.png" className="h-[40rem]" />
    </motion.div>
  );
};
