import { ArrowPathIcon } from '@heroicons/react/24/outline';

const ImageLoader = () => {
  return (
    <div className='absolute text-slate-800 w-full rounded-md mb-2 justify-center text-sm bg-slate-300 p-3 animate-pulse flex items-center'>
      이미지 불러오는 중
      <ArrowPathIcon className='w-4 animate-spin ml-1' />
    </div>
  );
};
export default ImageLoader;
