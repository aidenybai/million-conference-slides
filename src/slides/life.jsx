import { useAtom } from 'jotai';
import { bodyClassNameAtom } from '../layout';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default () => {
  const [_, setClassName] = useAtom(bodyClassNameAtom);

  useEffect(() => {
    setClassName(() => 'bg-white p-0');
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
      className="text-xs leading-none text-center flex flex-col justify-center items-center"
    >
      <div className="flex gap-5">
        <div>
          {Array(40)
            .fill(0)
            .map(() => {
              return (
                <p className="opacity-30">
                  <code>{'<div>foo</div>'}</code> 🔜{' '}
                  <code>{'<div>foo</div>'}</code>
                </p>
              );
            })}
        </div>
        <div>
          {Array(40)
            .fill(0)
            .map(() => {
              return (
                <p className="opacity-30">
                  <code>{'<div>foo</div>'}</code> 🔜{' '}
                  <code>{'<div>foo</div>'}</code>
                </p>
              );
            })}
        </div>
        <div>
          {Array(40)
            .fill(0)
            .map(() => {
              return (
                <p className="opacity-30">
                  <code>{'<div>foo</div>'}</code> 🔜{' '}
                  <code>{'<div>foo</div>'}</code>
                </p>
              );
            })}
        </div>
        <div>
          {Array(40)
            .fill(0)
            .map(() => {
              return (
                <p className="opacity-30">
                  <code>{'<div>foo</div>'}</code> 🔜{' '}
                  <code>{'<div>foo</div>'}</code>
                </p>
              );
            })}
        </div>
        <div>
          {Array(39)
            .fill(0)
            .map(() => {
              return (
                <p className="opacity-30">
                  <code>{'<div>foo</div>'}</code> 🔜{' '}
                  <code>{'<div>foo</div>'}</code>
                </p>
              );
            })}
          <p>
            <code className="text-red-500">{'<div>Old</div>'}</code> 🔜{' '}
            <code className="text-green-500">{'<div>New</div>'}</code>
          </p>
        </div>
      </div>

      <br />
      <p className="font-bold text-xl">
        1 diff of data – <code>O(1)</code>
      </p>
    </motion.div>
  );
};
