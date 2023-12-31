import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectsDev } from '../tools/data';
import Badge from './Badge';
import Carousel from './Carousel';
import ImageLoader from './ImageLoader';
import { ArrowTopRightOnSquareIcon, ExclamationTriangleIcon, LinkIcon } from '@heroicons/react/24/outline';

const Project: FC = () => {
  const { name } = useParams();
  const project = projectsDev.filter((v) => v.href === name)[0];
  const [bannerLoaded, setBannerLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='min-h-screen font-medium'>
      <header className='mx-auto max-w-2xl px-4 py-3 sm:px-6  lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col text-sm md:text-base md:flex-row items-center justify-between border-b border-slate-200 pb-5 pt-24'>
          <div className='flex gap-1.5 items-center'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-700'>{project.name}</h1>
            <span className='relative top-0.5'>
              <Badge content={project.details.version} />
            </span>
          </div>
          <span className='mt-2 md:mt-0 text-slate-800 overflow-hidden text-ellipsis line-clamp-1'>
            {project.subtitle}
          </span>
        </div>
        <div className='flex items-center'></div>
      </header>

      <div className='bg-white'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
          <div>
            <div className='relative text-slate-600'>
              {!bannerLoaded && <ImageLoader />}
              <img
                alt={project.details.banner}
                src={project.details.banner}
                onLoad={() => setBannerLoaded(true)}
                className='w-full top-0 ring-1 ring-slate-200 mb-5 rounded-md'
              />
              {project.details.description}

              <div className='mt-12 flex items-center text-slate-600'>
                <div className='flex items-center gap-1 font-medium text-slate-700 mr-4'>
                  <div className='w-[70px] pl-1.5 flex bg-slate-700 text-white rounded-md py-0.5 px-1.5'>
                    <LinkIcon className='w-3.5 mr-1 stroke-2' />
                    Link
                  </div>
                </div>
                <div className='flex gap-4 items-center'>
                  <a
                    className='hover:text-slate-900 flex'
                    target='_blank'
                    rel='noreferrer'
                    href={project.details.link.production}
                  >
                    프로덕션 페이지 <ArrowTopRightOnSquareIcon className='ml-0.5 w-4' />
                  </a>
                  <a
                    className='hover:text-slate-900 flex'
                    target='_blank'
                    rel='noreferrer'
                    href={project.details.link.wiki}
                  >
                    주요 기능 소개 <ArrowTopRightOnSquareIcon className='ml-0.5 w-4' />
                  </a>
                  <a
                    className='hover:text-slate-900 flex'
                    target='_blank'
                    rel='noreferrer'
                    href={project.details.link.github}
                  >
                    GitHub <ArrowTopRightOnSquareIcon className='ml-0.5 w-4' />
                  </a>
                </div>
              </div>

              <div className='mt-4 flex items-center text-slate-600'>
                <div className='mb-1 flex items-center gap-1 font-medium text-slate-700 mr-4'>
                  <div className='w-[70px] pl-1.5 mr-3 flex bg-slate-700 text-white rounded-md py-0.5 px-1.5'>
                    <ExclamationTriangleIcon className='w-4 mr-1 stroke-2' />
                    Issue
                  </div>
                  <span className='font-semibold'>{project.details.issues?.name}</span>
                </div>
              </div>
              {project.details.issues?.description.map((text) => (
                <div key={text} className='pl-1'>
                  • {text}
                </div>
              ))}
            </div>

            <dl className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
              <div className='border-t border-slate-200 pt-4'>
                <dt className=' text-slate-700 mb-3 font-semibold'>기술 태그</dt>
                {project.details.skills.map((skill) => (
                  <div key={skill.name} className='my-3 relative text-slate-600 text-sm'>
                    <dt className='inline bg-slate-200 px-2 py-0.5 rounded-md mr-1 text-slate-700'>
                      {skill.name}
                    </dt>{' '}
                    <dd className='inline'>{skill.content}</dd>
                  </div>
                ))}
              </div>
              <div className='border-t border-slate-200 pt-4'>
                <dt className=' text-slate-700 mb-3 font-semibold'>구현된 기능</dt>
                {project.details.implements.map((implement) => (
                  <div key={implement.name} className='my-3 relative text-slate-600 text-sm'>
                    <dt className='inline bg-slate-200 px-2 py-0.5 rounded-md mr-1 text-slate-700'>
                      {implement.name}
                    </dt>{' '}
                    <dd className='inline'>
                      {implement.content.map((ct) => (
                        <span key={ct} className='mr-1.5'>
                          {ct},
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </div>
            </dl>
          </div>
          <div className='w-full relative'>
            <Carousel
              subMessage={true}
              counter={true}
              images={project.details.images}
              wikiUrl={project.details.link.wiki}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
