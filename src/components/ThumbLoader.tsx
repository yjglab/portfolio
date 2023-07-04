import { PhotoIcon } from '@heroicons/react/20/solid';

const ThumbLoader = () => {
  return (
    <div className='absolute animate-pulse flex items-center justify-center w-full h-full bg-slate-300'>
      <PhotoIcon className='w-9 text-white' />
    </div>
  );
};
export default ThumbLoader;
