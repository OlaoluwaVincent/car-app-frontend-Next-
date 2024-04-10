import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { fetchCarImageID } from '@/lib/queries';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = { id: string };
const CarImage = (props: Props) => {
  const { isLoading, data } = useQuery({
    queryKey: ['car/image', props.id],
    queryFn: () => fetchCarImageID(props.id),
  });

  if (isLoading) {
    return (
      <Skeleton
        baseColor='#BAE5FF'
        style={{ height: '150px', width: '200px' }}
      />
    );
  }

  return (
    <>
      {data && (
        <div className='relative my-[20px] flex-shrink-0'>
          <Image
            src={data[0].url}
            // style={{ height: '150px', width: '200px' }}
            alt={'Product Image'}
            height={500}
            width={500}
            className='mx-auto md:object-cover bg-cover object-center bg-center md:w-[300px] md:h-[150px] w-[150px] h-[150px] object-fill flex-shrink-0'
          />
          <div className='absolute rotate-180 w-full max-w-full h-[50%] bg-gradient-to-t from-transparent to-white right-0 -bottom-1'></div>
        </div>
      )}
    </>
  );
};
export default CarImage;
