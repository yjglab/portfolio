import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../components/Badge';
import DropMenu from '../../components/DropMenu';
import { Menu } from '@headlessui/react';

const projects23 = [
  {
    name: 'BlooBolt',
    href: 'bloobolt',
    imageSrc: '',
    imageAlt: '소프트웨어 개발자와 기획자, 디자이너들의 소통 스퀘어',
    date: '2023',
    skills: ['TypeScript', 'React', 'Next', 'Redux-Toolkit', 'TailwindCSS', 'Express', 'Sequelize', 'AWS'],
    description: '소프트웨어 개발자와 기획자, 디자이너들의 소통 스퀘어',
  },
  {
    name: 'BlooWays',
    href: 'blooways',
    imageSrc: '',
    imageAlt: '실시간 온라인 라이브 토크 메시지',
    date: '2023',
    skills: [
      'TypeScript',
      'React',
      'SWR',
      'TailwindCSS',
      'Styled-components',
      'Express',
      'Socket.io',
      'Sequelize',
      'AWS',
    ],
    description: '실시간 온라인 라이브 토크 메시지',
  },
];

const projects22 = [
  {
    name: 'Museum Union Gallery',
    href: 'mug',
    imageSrc: '',
    imageAlt: '전시 정보를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 웹 서비스',
    date: '2022',
    skills: ['JavaScript', 'JQuery', 'Express', 'Pug', 'SCSS', 'MongoDB'],
    description: '전시 정보를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 웹 서비스',
  },
  {
    name: 'Tira',
    href: 'tira',
    imageSrc: '',
    imageAlt: '티라미수 케이크 쇼핑몰 사이트',
    date: '2022',
    skills: ['JavaScript', 'JQuery', 'Express', 'Pug', 'SCSS'],
    description: '티라미수 케이크 쇼핑몰 사이트',
  },
];

const Projects = () => {
  return (
    <div className='min-h-screen'>
      <header className='mx-auto max-w-2xl px-4 py-3 sm:px-6  lg:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between border-b border-slate-200 pb-5 pt-24'>
          <div className='flex gap-1.5 items-center'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-700'>Projects</h1>
            <span className='relative top-0.5'>
              <Badge content='Development' />
            </span>
          </div>
          <DropMenu menuTitle='프로젝트 유형' chevron={true} direction='right'>
            <Menu.Item>
              {({ active }) => (
                <button
                  type='button'
                  className={`${
                    active ? 'bg-slate-100' : 'text-slate-700'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  개발
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type='button'
                  className={`${
                    active ? 'bg-slate-100' : 'text-slate-800'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  디자인
                </button>
              )}
            </Menu.Item>
          </DropMenu>
        </div>
        <div className='flex items-center'></div>
      </header>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-slate-700'>2023</h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {projects23.map((project) => (
            <Link to={project.href} key={project.name} className=' group relative'>
              <div className='hover:scale-[101%] duration-100  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-slate-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
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
                  <p className='mt-1.5 text-sm text-slate-700'>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
