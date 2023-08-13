import { XMarkIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { useState } from 'react';

const HeaderNotice = () => {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <div
      className={classNames(
        showNotice ? 'flex' : 'hidden',
        'text-xs bg-orange-400 py-2 md:py-0.5 relative isolate items-center gap-x-6 overflow-hidden px-6 sm:px-3.5 sm:before:flex-1',
      )}
    >
      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        <p className=' leading-6 '>
          <strong className='font-semibold'>포트폴리오 페이지가 리뉴얼 되었습니다</strong>
          <svg viewBox='0 0 2 2' className='mx-2 inline h-0.5 w-0.5 fill-current' aria-hidden='true'>
            <circle cx={1} cy={1} r={1} />
          </svg>
          yukjaekyeong.web.app 사이트가 https://nebaram.vercel.app 으로 이관되었어요!
        </p>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://nebaram.vercel.app'
          className='flex-none rounded-full bg-slate-600 px-3.5 py-0.5 font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
        >
          새로운 사이트로 이동 <span aria-hidden='true'>&rarr;</span>
        </a>
      </div>
      <div className='flex flex-1 justify-end'>
        <button
          type='button'
          onClick={() => setShowNotice(false)}
          className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
        >
          <XMarkIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
};

export default HeaderNotice;
