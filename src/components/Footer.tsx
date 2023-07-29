import { clogo } from '../tools/global';

const Footer = () => {
  return (
    <footer className='mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8'>
      <div className='border-t border-slate-700/5 py-10'>
        <div className='flex w-36 justify-center items-center left-0 right-0 mx-auto'>
          <img alt='' className='w-8 h-auto' src={clogo} />
        </div>
        <p className='mt-4 text-center text-xs leading-6 text-slate-600'>
          © 2023 Jaekyeong Yuk. All rights reserved.
        </p>
        <div className='mt-12 flex text-slate-400 items-center justify-center space-x-4 text-sm leading-6'>
          {/* <Link to=''>
            <span className='cursor-pointer'></span>
          </Link>
          <div className='h-4 w-px bg-slate-600/20' />
          <Link to=''>
            <span className='cursor-pointer'></span>
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
