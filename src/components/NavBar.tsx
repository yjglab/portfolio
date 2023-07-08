import React, { Fragment, useState, FC, useCallback, useEffect } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { bloosLogo, bloosLogoFull } from '../tools/global';

const navigation = {
  categories: [],
  pages: [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Activities', href: '/activities' },
    { name: 'Personal Brand', href: '/brand' },
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
    <div id='navbar' className='fixed top-0 w-full z-50 shadow-lg shadow-slate-300/30'>
      {/* 모바일 */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative md:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-50 flex justify-end'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
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
                {/* <div className='h-[2px] w-full px-3 bg-slate-100'></div> */}

                <div className='absolute bottom-5 mt-2 px-4 py-6 w-full'>
                  <div className='flex w-full justify-center gap-1 items-center left-0 right-0 mx-auto'>
                    <img alt='' src={bloosLogoFull} className='w-24' />
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
            {/* height */}
            <div className='flex w-full h-12 md:h-14 items-center relative'>
              {/* Logo */}
              <div className='flex ml-2'>
                <Link className='flex items-center' to='/'>
                  <img src={bloosLogo} alt='logo' className='w-5' />
                  <span className='ml-1.5 text-slate-700 font-bold text-lg'>Jaekyeong Yuk</span>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className='hidden md:ml-8 md:block md:self-stretch'>
                <div className='flex h-full space-x-8'>
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className='flex items-center text-sm font-medium text-slate-600 hover:text-slate-700'
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
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
