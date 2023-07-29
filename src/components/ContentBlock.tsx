import { Link } from 'react-router-dom';
import { Content } from '../types/Content';
import Badge from './Badge';
import ThumbLoader from './ThumbLoader';
import { FC, useCallback } from 'react';

interface Props {
  data: Content;
  thumbLoaded: boolean;
  setThumbLoaded: (prev: boolean) => void;
}
const ContentBlock: FC<Props> = ({ data, thumbLoaded, setThumbLoaded }) => {
  const onProgress = useCallback(() => {
    return window.alert('현재 열심히 개발중인 프로젝트입니다. 기대해주세요! 😎');
  }, []);

  return data.progress ? (
    <button onClick={onProgress} key={data.name} className=' group relative'>
      <div
        className={`relative ring-1 hover:opacity-75 ring-slate-200 flex items-center shadow-slate-200 shadow-lg hover:scale-[101%] duration-100  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  h-60`}
      >
        {!thumbLoaded && <ThumbLoader />}
        <img
          src={data.thumb}
          alt={data.imageAlt}
          onLoad={() => setThumbLoaded(true)}
          className=' object-cover object-center'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div className='w-full'>
          <h3 className='text-sm text-slate-700 flex justify-between items-center'>
            <span className='font-bold'>{data.name}</span>
            <span>{data.month}</span>
          </h3>
          <p className='mt-1.5 text-sm text-left text-slate-700'>{data.subtitle}</p>

          <div className='mt-1.5 flex-wrap flex'>
            {data.tags.map((tag: string) => (
              <span key={tag} className='mb-1'>
                <Badge content={tag} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  ) : (
    <Link to={data.href} key={data.name} className=' group relative'>
      <div
        className={`relative ring-1 hover:opacity-75 ring-slate-200 flex items-center shadow-slate-200 shadow-lg hover:scale-[101%] duration-100  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  h-60`}
      >
        {!thumbLoaded && <ThumbLoader />}
        <img
          src={data.thumb}
          alt={data.imageAlt}
          onLoad={() => setThumbLoaded(true)}
          className=' object-cover object-center'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div className='w-full'>
          <h3 className='text-sm text-slate-700 flex justify-between items-center'>
            <span className='font-bold'>{data.name}</span>
            <span>{data.month}</span>
          </h3>
          <p className='mt-1.5 text-sm text-slate-700'>{data.subtitle}</p>

          <div className='mt-1.5 flex-wrap flex'>
            {data.tags.map((tag: string) => (
              <span key={tag} className='mb-1'>
                <Badge content={tag} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ContentBlock;
