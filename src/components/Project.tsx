import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { projectsDev } from '../tools/data';

const Project: FC = () => {
  const { name } = useParams();
  const project = projectsDev.filter((v) => v.href === name);

  return <div className='min-h-screen'></div>;
};

export default Project;
