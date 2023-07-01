import { Link } from 'react-router-dom';
import { activities } from '../tools/data';

const Activities = () => {
  return (
    <div className='min-h-screen'>
      <header className='mx-auto max-w-2xl px-4 py-3 sm:px-6  lg:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between border-b border-slate-200 pb-5 pt-24'>
          <div className='flex gap-1.5 items-center'>
            <h1 className='text-3xl font-bold tracking-tight text-slate-700'>Activities</h1>
            <span className='relative top-0.5'>{/* <Badge content={category} /> */}</span>
          </div>
        </div>
        <div className='flex items-center'></div>
      </header>

      <main>
        {['완료된 활동', '진행중인 활동'].map((status) => (
          <div key={status} className='mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-slate-700'>{status}</h2>

            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {activities
                .filter((v) => v.status === status)
                .map((activity) => (
                  <Link to={activity.href} key={activity.name} className=' group relative'>
                    <div className='shadow-slate-200 shadow-lg hover:scale-[101%] duration-100  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-slate-200  hover:opacity-75'>
                      <img
                        src={activity.thumb}
                        alt={activity.imageAlt}
                        className=' object-cover object-center '
                      />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div className='w-full'>
                        <h3 className='text-sm text-slate-700 flex justify-between items-center'>
                          <span className='font-bold'>{activity.name}</span>
                          <span>{activity.date}</span>
                        </h3>
                        {/* <div className='mt-1.5 flex-wrap flex'>
                          {project.skills.map((skill) => (
                            <span key={skill} className='mb-1'>
                              <Badge content={skill} />
                            </span>
                          ))}
                        </div> */}
                        <p className='mt-1.5 text-sm text-slate-700'>{activity.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Activities;
