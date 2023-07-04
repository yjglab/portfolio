import { ArrowPathIcon } from '@heroicons/react/24/outline';

const ImageLoader = () => {
  return (
    <div className='z-10 absolute text-white w-full rounded-t-md mb-2 justify-center text-sm bg-slate-700/50 ring-1 font-medium ring-slate-300 py-1.5 flex items-center'>
      이미지 불러오는 중
      <ArrowPathIcon className='w-4 animate-spin ml-1' />
    </div>
  );
};
export default ImageLoader;
