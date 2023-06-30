import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import React, { FC, useState } from 'react';

interface Props {
  images: { name: string; src: string }[];
}
const Carousel: FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className='flex items-center  w-[100%] group '>
      <div className='w-full  h-auto relative'>
        <img alt='' src={images[currentIndex].src} className='shadow-slate-300 shadow-lg w-full rounded-md' />
        <div className='bg-slate-400 hover:bg-slate-600 p-1 sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[5%]  rounded-full  text-white cursor-pointer'>
          <ArrowLeftIcon onClick={prevSlide} className=' w-5 h-5   ' />
        </div>
        <div className='bg-slate-400 hover:bg-slate-600 p-1 sm:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[5%]  rounded-full  text-white  cursor-pointer'>
          <ArrowRightIcon onClick={nextSlide} className=' w-5 h-5   ' />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
