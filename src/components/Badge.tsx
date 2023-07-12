import { FC } from 'react';

interface Props {
  content: string;
}
const Badge: FC<Props> = ({ content }) => {
  return (
    <span className=' mr-1.5 py-0.5 rounded-md flex justify-center items-center bg-slate-200 text-slate-700 px-2.5 text-xs'>
      {content}
    </span>
  );
};

export default Badge;
