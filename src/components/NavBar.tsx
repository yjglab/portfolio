import React, { Fragment, useState, FC, useCallback, useEffect } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { me } from '../tools/data';
import { clogo } from '../tools/global';
import HeaderNotice from './HeaderNotice';

const navigation = {
  categories: [],
  pages: [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Activities', href: '/activities' },
    // { name: 'Personal Brand', href: '/brand' },
  ],
};

const NavBar: FC = () => {
  const [open, setOpen] = useState(false);
  const [navOn, setNavOn] = useState(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    function onScreenScroll() {
      if (window.scrollY + document.documentElement.clientHeight > 1000) {
        setNavOn(true);
      } else {
        setNavOn(false);
      }
    }

    window.addEventListener('scroll', onScreenScroll);
    return () => {
      window.removeEventListener('scroll', onScreenScroll);
    };
  }, []);

  return (
    <div id='navbar' className='fixed top-0 w-full z-50 '>
      {/* 모바일 */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative md:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-50 flex justify-end'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-200 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-200 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                <div className='flex px-6 py-3  item-center justify-end'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-slate-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <div className='space-y-6  px-4 py-6'>
                  {navigation.pages.map((page) => (
                    <div onClick={onClose} key={page.name} className='flow-root'>
                      <Link to={page.href} className='-m-2 block p-2 font-medium text-slate-800'>
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className='absolute bottom-5 mt-2 px-4 py-6 w-full'>
                  <div className='flex w-full justify-center gap-1 items-center left-0 right-0 mx-auto'>
                    <img alt='' src={clogo} className='w-8' />
                  </div>
                  <p className='mt-4 text-center text-xs leading-6 text-slate-600'>
                    © 2023 Jaekyeong Yuk. All rights reserved.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className={`${navOn ? 'bg-white/50 backdrop-blur-sm' : 'bg-white'} relative duration-200`}>
        <nav aria-label='Top' className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
          <div className='relative'>
            <div
              className={`${
                navOn ? 'md:h-14' : 'md:h-16'
              } duration-200 flex w-full h-12 items-center relative`}
            >
              <div className='flex ml-2'>
                <Link className='flex items-center' to='/'>
                  <img src={clogo} alt='logo' className='w-5' />
                  <span className='ml-1.5 text-slate-700 font-bold text-lg'>Jaekyeong Yuk</span>
                </Link>
              </div>
              <Popover.Group className='hidden md:ml-8 md:block md:self-stretch'>
                <div className='flex h-full space-x-8'>
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className={`${
                        navOn ? 'text-sm' : 'text-md'
                      } duration-200 flex items-center font-medium text-slate-600 hover:text-slate-900`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>
              <button
                type='button'
                className='rounded-md bg-white p-2 text-slate-400 md:hidden absolute right-0'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
              <div className='md:block hidden absolute right-0'>
                <a
                  href={
                    me.informations
                      .find((v) => v.name === 'Channels')
                      ?.links.find((link) => link.title === 'github')?.url
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg
                    height='24'
                    aria-hidden='true'
                    viewBox='0 0 16 16'
                    version='1.1'
                    width='24'
                    data-view-component='true'
                  >
                    <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <HeaderNotice />
    </div>
  );
};

export default NavBar;
