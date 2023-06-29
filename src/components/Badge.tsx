import { FC } from 'react';

interface Props {
  content: string;
}
const Badge: FC<Props> = ({ content }) => {
  return (
    <span className='hover:contrast-150 mr-1 mb-1 py-0.5 rounded-full flex justify-center items-center bg-slate-200 text-slate-700 px-2.5 text-xs hover:bg-'>
      {content}
    </span>
  );
};

export default Badge;
