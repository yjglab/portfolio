import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { activities } from '../tools/data';
import Carousel from './Carousel';

const Activity: FC = () => {
  const { name } = useParams();
  const activity = activities.filter((v) => v.href === name)[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='min-h-screen'>
      <header className='mx-auto max-w-2xl px-4 py-3 sm:px-6  lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col text-sm md:text-base md:flex-row items-center justify-between border-b border-slate-200 pb-5 pt-24'>
          <div className='flex gap-1.5 items-center'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-700'>{activity.name}</h1>
            <span className='relative top-0.5'>{/* <Badge content={activity.details.version} /> */}</span>
          </div>
          <span className='mt-2 md:mt-0 text-slate-800 overflow-hidden text-ellipsis line-clamp-1'>
            {activity.subtitle}
          </span>
        </div>
        <div className='flex items-center'></div>
      </header>

      <div className='bg-white'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
          <div>
            <p className=' text-slate-600'>
              <img
                alt=''
                src={activity.details.banner}
                className='ring-1 ring-slate-200 mb-5 rounded-md w-full'
              />
              {activity.details.description}
              <p className='mt-12 flex items-center text-slate-600'>
                {activity.details.link.length !== 0 && (
                  <span className='font-medium text-slate-700 mr-4'>Link</span>
                )}
                <p className='flex gap-4 items-center text-sm'>
                  {activity.details.link.map((l, idx) => (
                    <a
                      key={l}
                      className='hover:text-slate-700 font-bold'
                      target='_blank'
                      rel='noreferrer'
                      href={l}
                    >
                      {`활동링크${idx + 1}`}
                    </a>
                  ))}
                </p>
              </p>
            </p>

            <dl className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'></dl>
          </div>
          {activity.details.images && (
            <div className='w-full relative'>
              <Carousel subMessage={false} images={activity.details.images} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
