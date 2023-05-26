import { useAtom } from 'jotai';
import { bodyClassNameAtom } from '../layout';
import { useEffect } from 'react';
import { frames } from '../components/vdom';

export default frames.map((_, i) => {
  return () => {
    const [, setClassName] = useAtom(bodyClassNameAtom);

    useEffect(() => {
      setClassName(() => 'from-[#111] to-[#372f47] text-white');
    }, []);

    return frames[i];
  };
});
