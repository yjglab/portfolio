import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import React, { FC, useState } from 'react';

interface Props {
  images: { name: string; src: string }[];
  wikiUrl?: string;
  subMessage: boolean;
}
const Carousel: FC<Props> = ({ images, wikiUrl, subMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='text-slate-600'>
      <div className=' flex items-center w-full group '>
        <div className='w-full  h-auto relative'>
          {!imageLoaded && (
            <div className='h-44 rounded-md justify-center text-sm bg-slate-200 p-3 animate-pulse flex items-center'>
              이미지를 불러오는 중입니다
              <ArrowPathIcon className='w-4 animate-spin ml-1' />
            </div>
          )}
          <img
            alt=''
            src={images[currentIndex].src}
            onLoad={() => setImageLoaded(true)}
            className='shadow-slate-300 shadow-lg w-full rounded-md'
          />
          <div className='bg-slate-400/80 hover:bg-slate-600/80 p-1 sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[5%]  rounded-full  text-white cursor-pointer'>
            <ArrowLeftIcon onClick={prevSlide} className=' w-5 h-5   ' />
          </div>
          <div className='bg-slate-400/80 hover:bg-slate-600/80 p-1 sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[5%]  rounded-full  text-white  cursor-pointer'>
            <ArrowRightIcon onClick={nextSlide} className=' w-5 h-5   ' />
          </div>
        </div>
      </div>
      {subMessage && (
        <div className='w-full top-6 relative flex items-center'>
          <span className='text-sm'>
            구현된 상세 내용은{' '}
            <a
              href={wikiUrl}
              target='_blank'
              rel='noreferrer'
              className='underline font-bold hover:text-slate-800'
            >
              프로젝트 위키
            </a>
            에서 볼 수 있습니다
          </span>
          <div className='absolute right-0 px-1 text-center py-0.5 text-slate-700 bg-slate-200 rounded-md w-10 text-sm '>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
