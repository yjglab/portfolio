import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import React, { FC, useState } from 'react';
import ImageLoader from './ImageLoader';

interface Props {
  images: { name: string; src: string }[];
  wikiUrl?: string;
  subMessage: boolean;
  counter: boolean;
}
const Carousel: FC<Props> = ({ images, wikiUrl, subMessage, counter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const prevSlide = () => {
    setImageLoaded(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setImageLoaded(false);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='text-slate-600'>
      <div className=' flex items-center w-full group '>
        <div className='w-full  h-auto relative'>
          {!imageLoaded && <ImageLoader />}
          <img
            alt={images[currentIndex].src}
            src={images[currentIndex].src}
            onLoad={() => setImageLoaded(true)}
            className={`${
              !imageLoaded && 'opacity-50 grayscale'
            } shadow-slate-300 shadow-lg w-full rounded-md`}
          />
          <div className='bg-slate-400/80 hover:bg-slate-600/80 p-1 sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[5%]  rounded-full  text-white cursor-pointer'>
            <ArrowLeftIcon onClick={prevSlide} className=' w-5 h-5   ' />
          </div>
          <div className='bg-slate-400/80 hover:bg-slate-600/80 p-1 sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[5%]  rounded-full  text-white  cursor-pointer'>
            <ArrowRightIcon onClick={nextSlide} className=' w-5 h-5   ' />
          </div>
        </div>
      </div>
      <div className='w-full top-6 relative flex items-center'>
        {subMessage && (
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
        )}
        {counter && (
          <div className='absolute right-0 px-1 text-center py-0.5 text-slate-700 bg-slate-200 rounded-md w-10 text-sm '>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
