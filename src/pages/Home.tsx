import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Badge from '../components/Badge';
import { me } from '../tools/data';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Home = () => {
  const [about1Ref, about1InView] = useInView();
  const [about2Ref, about2InView] = useInView();
  const [about3Ref, about3InView] = useInView();
  const [about4Ref, about4InView] = useInView();
  const [about5Ref, about5InView] = useInView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='font-main tracking-tight bg-white py-24 sm:py-32 mt-10 font-medium'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div
          ref={about1Ref}
          className={`${
            about1InView && 'opacity-100'
          } opacity-0 duration-300 delay-[300ms] mx-auto max-w-2xl text-center`}
        >
          <p className='text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl'>{me.name}</p>
          <h2 className='mt-2.5 text-sm md:text-base font-semibold leading-7 text-slate-500'>{me.title}</h2>
          <div className='w-36 rounded-full overflow-hidden mx-auto my-10 shadow-slate-200 shadow-lg'>
            <img src={me.avatar} alt='avatar' className='object-cover scale-150 relative top-2' />
          </div>

          {me.description.brief.map((text) => (
            <p
              key={text}
              className='lg:text-center text-left mt-6 text-[17px] leading-[1.85rem] text-slate-600'
            >
              {text}
            </p>
          ))}
        </div>

        <div
          ref={about2Ref}
          className={`${
            about2InView && 'opacity-100'
          } opacity-0 duration-300 delay-[300ms] mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl`}
        >
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {me.informations.map((information) => (
              <div key={information.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-slate-700'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-600'>
                    <information.icon className='h-6 w-6 text-white' aria-hidden='true' />
                  </div>
                  {information.name}
                </dt>
                {information.name === 'Channels' ? (
                  <div className='flex flex-col mt-2 text-base leading-7 text-slate-600'>
                    {information.links.map((link) => (
                      <div key={link.title} className='flex items-center hover:text-slate-900'>
                        <Badge content={link.title} />
                        <a href={link.url} target='_blank' rel='noreferrer'>
                          {link.url}
                        </a>
                        <ArrowTopRightOnSquareIcon className='w-4 ml-0.5' />
                      </div>
                    ))}
                  </div>
                ) : (
                  <dd className='mt-2 text-base leading-7 text-slate-600'>
                    {Array.isArray(information.description)
                      ? information.description.map((text) => <div key={text}>• {text}</div>)
                      : information.description}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        <div
          ref={about3Ref}
          className={`${
            about3InView && 'opacity-100'
          } opacity-0 duration-300 delay-[300ms] mx-auto mt-36 max-w-2xl text-center`}
        >
          <p className='mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-3xl'>
            어떤 개발자인가요?
          </p>
        </div>

        <div
          ref={about4Ref}
          className={`${
            about4InView && 'opacity-100'
          } opacity-0 duration-300 delay-[500ms] mx-auto mt-12 max-w-2xl lg:mt-14 lg:max-w-4xl`}
        >
          <div className='text-[17px] grid grid-cols-1 gap-x-16 gap-y-10 tracking-tight sm:grid-cols-2 lg:pt-2'>
            {me.description.self.slice(0, 2).map((s) => (
              <div key={s.title} className=' flex flex-col items-start'>
                <div className='mt-4 font-bold text-slate-800'>{s.title}</div>
                <div className='mt-2 font-normal leading-[1.85rem] text-gray-700'>{s.content}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={about5Ref}
          className={`${
            about5InView && 'opacity-100'
          } opacity-0 duration-300 delay-[500ms] mx-auto mt-12 max-w-2xl lg:mt-14 lg:max-w-4xl`}
        >
          <div className='text-[17px] grid grid-cols-1 gap-x-16 gap-y-10 tracking-tight sm:grid-cols-2 lg:pt-2'>
            {me.description.self.slice(2, 4).map((s) => (
              <div key={s.title} className=' flex flex-col items-start'>
                <div className='mt-4 font-bold text-slate-800'>{s.title}</div>
                <div className='mt-2 whitespace-pre-line font-normal leading-[1.85rem] text-gray-700'>
                  {s.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className='mx-auto mt-32 max-w-2xl text-center'>
        <p className='mt-2 text-2xl font-bold tracking-tight text-slate-700 sm:text-3xl'>Self Introduce</p>
        <p className='lg:text-center text-left mt-6 text-lg leading-8 text-slate-600'>
          {me.description.self}
        </p>
      </div> */}
    </div>
  );
};

export default Home;
