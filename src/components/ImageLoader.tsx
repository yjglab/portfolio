import { ArrowPathIcon } from '@heroicons/react/24/outline';

const ImageLoader = () => {
  return (
    <div className='rounded-md justify-center text-sm bg-slate-300 p-3 animate-pulse flex items-center'>
      이미지를 불러오는 중입니다
      <ArrowPathIcon className='w-4 animate-spin ml-1' />
    </div>
  );
};
export default ImageLoader;
