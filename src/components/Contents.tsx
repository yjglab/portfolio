import React, { FC, useEffect, useState } from 'react';
import Badge from './Badge';
import DropMenu from './DropMenu';
import { Menu } from '@headlessui/react';
import { activities, projectsDev } from '../tools/data';
import { Content } from '../types/Content';
import ContentBlock from './ContentBlock';

interface Props {
  page: string;
}

const Contents: FC<Props> = ({ page }) => {
  const [category, setCategory] = useState('development');
  const [pageData, setPageData] = useState<Content[]>(page === 'Projects' ? projectsDev : activities);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  useEffect(() => {
    if (page === 'Projects') {
      setPageData(projectsDev);
    } else {
      setPageData(activities);
    }
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='min-h-screen font-medium'>
      <header className='mx-auto max-w-2xl px-4 py-3 sm:px-6  lg:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between border-b border-slate-200 pb-5 pt-24'>
          <div className='flex gap-1.5 items-center'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-700'>{page}</h1>
            {page === 'Projects' && (
              <span className='relative top-0.5'>
                <Badge content={category} />
              </span>
            )}
          </div>
          {page === 'Projects' && (
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
          )}
        </div>
        <div className='flex items-center'></div>
      </header>

      <main>
        <div className='mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
          {page === 'Projects' ? (
            [2023, 2022, 2021, 2020].map((year) => (
              <div key={year} className='mb-20'>
                <h2 className='text-2xl font-bold tracking-tight text-slate-700'>{year}</h2>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {pageData
                    .filter((v) => v.date === year)
                    .map((data) => (
                      <ContentBlock
                        key={data.href}
                        data={data}
                        thumbLoaded={thumbLoaded}
                        setThumbLoaded={setThumbLoaded}
                      />
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {pageData.map((data) => (
                <ContentBlock
                  key={data.href}
                  data={data}
                  thumbLoaded={thumbLoaded}
                  setThumbLoaded={setThumbLoaded}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Contents;
