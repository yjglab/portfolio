import { PhotoIcon } from '@heroicons/react/20/solid';

const ThumbLoader = () => {
  return (
    <div className='flex items-center justify-center w-full h-full bg-slate-300 animate-pulse'>
      <PhotoIcon className='w-9 text-slate-400' />
    </div>
  );
};
export default ThumbLoader;
