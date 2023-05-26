import { useAtom } from 'jotai';
import { bodyClassNameAtom } from '../layout';
import { useEffect } from 'react';
import { frames } from '../components/static-analysis';

export default frames.map((_, i) => {
  return () => {
    const [, setClassName] = useAtom(bodyClassNameAtom);

    useEffect(() => {
      setClassName(() => 'from-[#111] to-[#372f47] text-white');
    }, []);

    return (
      <div className="flex-col">
        <p className="text-3xl text-center font-bold flex flex-col justify-center items-center leading-normal">
          Compiler
        </p>
        {frames[i]}
      </div>
    );
  };
});
