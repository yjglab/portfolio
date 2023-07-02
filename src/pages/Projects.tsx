import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DropMenu from '../components/DropMenu';
import { Menu } from '@headlessui/react';
import { projectsDev } from '../tools/data';
import ThumbLoader from '../components/ThumbLoader';

const Projects = () => {
  const [category, setCategory] = useState('development');
  const [thumbLoaded, setThumbLoaded] = useState(false);

  return (
    <div className='min-h-screen'>
      <header className='mx-auto max-w-2xl px-4 py-3 sm:px-6  lg:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between border-b border-slate-200 pb-5 pt-24'>
          <div className='flex gap-1.5 items-center'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-700'>Projects</h1>
            <span className='relative top-0.5'>
              <Badge content={category} />
            </span>
          </div>
          <DropMenu menuTitle='프로젝트 유형' chevron={true} direction='right'>
            <Menu.Item>
              {({ active }) => (
                <button
                  type='button'
                  onClick={() => setCategory('development')}
                  className={`${
                    active ? 'bg-slate-100' : 'text-slate-700'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  개발
                </button>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <button
                  type='button'
                  onClick={() => setCategory('design')}
                  className={`${
                    active ? 'bg-slate-100' : 'text-slate-800'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  디자인
                </button>
              )}
            </Menu.Item> */}
          </DropMenu>
        </div>
        <div className='flex items-center'></div>
      </header>

      {category === 'development' ? (
        <main>
          {[2023, 2022, 2021].map((year) => (
            <div key={year} className='mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
              <h2 className='text-2xl font-bold tracking-tight text-slate-700'>{year}</h2>

              <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {projectsDev
                  .filter((v) => v.date === year)
                  .map((project) => (
                    <Link to={project.href} key={project.name} className=' group relative'>
                      <div className='flex items-center shadow-slate-200 shadow-lg hover:scale-[101%] duration-100  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md hover:opacity-75 h-60'>
                        {!thumbLoaded && <ThumbLoader />}
                        <img
                          src={project.thumb}
                          alt={project.imageAlt}
                          onLoad={() => setThumbLoaded(true)}
                          className=' object-cover object-center'
                        />
                      </div>
                      <div className='mt-4 flex justify-between'>
                        <div className='w-full'>
                          <h3 className='text-sm text-slate-700 flex justify-between items-center'>
                            <span className='font-bold'>{project.name}</span>
                            <span>{project.date}</span>
                          </h3>
                          <div className='mt-1.5 flex-wrap flex'>
                            {project.skills.map((skill) => (
                              <span key={skill} className='mb-1'>
                                <Badge content={skill} />
                              </span>
                            ))}
                          </div>
                          <p className='mt-1.5 text-sm text-slate-700'>{project.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </main>
      ) : (
        ''
      )}
    </div>
  );
};

export default Projects;
