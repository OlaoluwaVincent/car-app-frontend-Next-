import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingState = () => {
  return (
    <div className='flex flex-col w-56 h-32'>
      <div className='flex justify-between items-center gap-5'>
        <Skeleton
          count={1}
          baseColor='#BAE5FF'
          containerClassName='flex-1'
          style={{ width: '30px' }}
        />
        <Skeleton
          count={1}
          baseColor='#BAE5FF'
          containerClassName='flex-0'
          className='items-end'
          style={{ width: '30px' }}
        />
      </div>
      <Skeleton className='h-20 rounded-sm' />
      <div className='flex justify-between items-center gap-5'>
        <Skeleton count={1} baseColor='#BAE5FF' style={{ width: '30px' }} />
        <Skeleton
          count={1}
          baseColor='#BAE5FF'
          className='items-end'
          style={{ width: '30px' }}
        />
        <Skeleton
          count={1}
          baseColor='#BAE5FF'
          className='items-end'
          style={{ width: '30px' }}
        />
      </div>
      <div className='flex justify-between items-center gap-10'>
        <Skeleton
          count={1}
          baseColor='#BAE5FF'
          containerClassName='flex-1'
          className='h-8'
        />
        <Skeleton
          count={1}
          baseColor='#BAE5FF'
          containerClassName='flex-1'
          className='h-8'
        />
      </div>{' '}
    </div>
  );
};
export default LoadingState;
