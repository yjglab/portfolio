import Badge from '../components/Badge';
import { me } from '../tools/data';
import { avatar } from '../tools/global';

const Home = () => {
  return (
    <div className='bg-white py-24 sm:py-32 mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-base font-semibold leading-7 text-slate-600'>{me.title}</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl'>{me.name}</p>
          <div className='w-36 rounded-full overflow-hidden mx-auto my-10 shadow-slate-200 shadow-lg'>
            <img src={me.avatar} alt='avatar' className='object-cover scale-150 relative top-2' />
          </div>

          <p className='lg:text-center text-left mt-6 text-lg leading-8 text-slate-600'>{me.description}</p>
        </div>

        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {me.informations.map((information) => (
              <div key={information.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-slate-700'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-600'>
                    <information.icon className='h-6 w-6 text-white' aria-hidden='true' />
                  </div>
                  {information.name}
                </dt>
                {information.name === '채널' ? (
                  <div className='flex flex-col mt-2 text-base leading-7 text-slate-600 hover:text-slate-900'>
                    <div className='flex items-center'>
                      <Badge content='Email' />
                      <span>{information.links.email}</span>
                    </div>
                    <div className='flex items-center'>
                      <Badge content='GitHub' />
                      <a href={information.links.github} target='_blank' rel='noreferrer'>
                        {information.links.github}
                      </a>
                    </div>
                    <div className='flex items-center'>
                      <Badge content='Blog' />
                      <a href={information.links.blog} target='_blank' rel='noreferrer'>
                        {information.links.blog}
                      </a>
                    </div>
                  </div>
                ) : (
                  <dd className='mt-2 text-base leading-7 text-slate-600'>{information.description}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home;
