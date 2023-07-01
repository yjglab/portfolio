import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsDev } from '../tools/data';
import Badge from './Badge';
import Carousel from './Carousel';

const Project: FC = () => {
  const { name } = useParams();
  const project = projectsDev.filter((v) => v.href === name)[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='min-h-screen'>
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
            <div className=' text-slate-600'>
              <img
                alt=''
                src={project.details.banner}
                className='ring-1 ring-slate-200 mb-5 rounded-md w-full'
              />
              {project.details.description}
              <div className='mt-12 flex items-center text-slate-600'>
                <span className='font-medium text-slate-700 mr-4'>Link</span>
                <div className='flex gap-4 items-center text-sm'>
                  <a
                    className='hover:text-slate-700 font-bold'
                    target='_blank'
                    rel='noreferrer'
                    href={project.details.link.production}
                  >
                    프로덕션 페이지
                  </a>
                  <a
                    className='hover:text-slate-700 font-bold'
                    target='_blank'
                    rel='noreferrer'
                    href={project.details.link.wiki}
                  >
                    기능 상세보기
                  </a>
                  <a
                    className='hover:text-slate-700 font-bold'
                    target='_blank'
                    rel='noreferrer'
                    href={project.details.link.github}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <dl className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
              <div className='border-t border-slate-200 pt-4'>
                <dt className='font-medium text-slate-700 mb-3'>기술 태그</dt>
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
                <dt className='font-medium text-slate-700 mb-3'>구현된 기능</dt>
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
            <Carousel subMessage={true} images={project.details.images} wikiUrl={project.details.link.wiki} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
