'use client';

import { fetchCarID } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';
import LoadingState from '../loader/loader';

import { GiSteeringWheel } from 'react-icons/gi';
import { BiSolidGasPump } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi2';
import Link from 'next/link';
import CarImage from './CarImage';
import LikeImage from './LikeImage';
import styles from './cars.module.css';

type Props = {
  id: string;
};
const Car = (props: Props) => {
  const { isLoading, data } = useQuery({
    queryKey: ['car', props.id],
    queryFn: () => fetchCarID(props.id),
  });

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      {data && (
        <article
          className={
            `p-4 shadow-mild flex flex-col gap-5 rounded-lg bg-white ` +
            styles.car_container
          }
        >
          {/* Header */}
          <div className='flex items-start justify-between'>
            <div className='space-y-2'>
              <h2 className='text-xl font-bold text-black-500'>{data.name}</h2>
              <p title='car name' className='text-sm text-black-300 uppercase'>
                {data.carType}
              </p>
            </div>
            <LikeImage />
          </div>

          <section className='flex flex-row md:flex-col items-center justify-between gap-3'>
            {/* Image */}
            <CarImage id={data.carImage.id} />
            {/* Desc */}
            <div className='flex flex-col md:flex-row md:items-center gap-2 w-full justify-between'>
              <aside className='flex gap-2 md:gap-1 items-center'>
                <BiSolidGasPump size='24' className='fill-black-400' />
                <p className='text-black-400 text-xs md:text-sm '>
                  {data.gasoline}
                </p>
              </aside>
              <aside className='flex gap-2 md:gap-1 items-center'>
                <GiSteeringWheel size='24' className='fill-black-400' />
                <p className='text-black-400 text-xs md:text-sm '>
                  {data.steering}
                </p>
              </aside>
              <aside className='flex gap-2 md:gap-1 items-center'>
                <HiUsers size='24' className='fill-black-400' />
                <p className='text-black-400 text-xs md:text-sm '>
                  {data.capacity}
                </p>
              </aside>
            </div>
          </section>
          {/* Footer */}
          <div className='flex items-center justify-between'>
            <aside className='font-bold text-sm md:text-base'>
              ${data.amount} <span className='font-normal'>/ Day</span>
            </aside>
            <aside>
              <Link
                href={'cars/' + data.id}
                className='px-5 py-2 bg-darkblue-600 hover:bg-info-500 rounded-[4px] text-white tracking-wider'
              >
                Rent
              </Link>
            </aside>
          </div>
        </article>
      )}
    </>
  );
};
export default Car;
