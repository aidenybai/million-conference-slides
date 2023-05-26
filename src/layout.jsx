import { atom, useAtom } from 'jotai';
import { Shortcut } from '@shopify/react-shortcuts';

export const bodyClassNameAtom = atom('');
export const mainClassNameAtom = atom('');

const Layout = ({
  children,
  slide,
  maxSlide,
  handleBackward,
  handleForward,
}) => {
  const [bodyClassName] = useAtom(bodyClassNameAtom);
  const [mainClassName] = useAtom(bodyClassNameAtom);
  return (
    <div
      className={`flex flex-col min-h-screen bg-gradient-to-b p-3 overflow-hidden ${bodyClassName}`}
    >
      <main
        className={`flex flex-grow items-center justify-center p-32 ${mainClassName}`}
      >
        {children}
      </main>
      <footer className="absolute left-1/2 bottom-5 transform -translate-x-1/2 flex text-lg font-mono gap-2 opacity-50 hover:opacity-100 transition-opacity bg-black/70 rounded-full px-3 py-1 text-white shadow-lg">
        <button
          className={`opacity-50 active:scale-125 hover:scale-110 transition-opacity ${
            slide === 0 ? 'opacity-30' : ''
          }`}
          onClick={handleBackward}
        >
          --
        </button>
        <p className="opacity-100">
          {slide}
          <span className="opacity-90">/{maxSlide}</span>
        </p>
        <button
          className={`opacity-50 active:scale-125 hover:scale-110 transition-opacity ${
            slide === maxSlide ? 'opacity-30' : ''
          }`}
          onClick={handleForward}
        >
          ++
        </button>
      </footer>
      <Shortcut ordered={['ArrowLeft']} onMatch={handleBackward} />
      <Shortcut ordered={['ArrowRight']} onMatch={handleForward} />
    </div>
  );
};

export default Layout;
