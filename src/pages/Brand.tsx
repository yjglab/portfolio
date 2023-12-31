import { useEffect } from 'react';
import { avatar, clogo } from '../tools/global';

const Brand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='font-main tracking-tight font-medium min-h-screen items-center flex justify-center relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:max-w-5xl'>
        <img className='mx-auto w-[90%] sm:w-[50%]' src={clogo} alt='' />
        <figure className='mt-14'>
          <blockquote className='text-center text-lg leading-8 text-slate-700 sm:leading-8'>
            <p>
              <span className='font-bold'>bloo</span>는 안정성과 신뢰성을 상징하는 &apos;blue&apos;와 발전과
              성장을 도모하는 &apos;boost&apos;를 연결한 저의 퍼스널 브랜드입니다. <br />
              bloo는 안정적이고 활발한 성장과 발전을 추구하며, 저의 서비스를 통해 사용자들에게 지속적인 혁신과
              가치를 전달하고자 합니다
            </p>
          </blockquote>

          <figcaption className='mt-10'>
            <div className='shadow-slate-200 shadow-lg overflow-hidden mx-auto w-14 rounded-full'>
              <img className='scale-150 relative top-2 ' src={avatar} alt='' />
            </div>

            <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
              <div className='font-semibold text-slate-700'>Jaekyeong Yuk</div>
              {/* <svg viewBox='0 0 2 2' width={3} height={3} aria-hidden='true' className='fill-slate-700'>
                <circle cx={1} cy={1} r={1} />
              </svg> */}
              {/* <div className='text-slate-600'></div> */}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Brand;
