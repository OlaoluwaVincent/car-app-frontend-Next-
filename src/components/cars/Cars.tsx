'use client';
import { fetchCars } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';
import LoadingState from '../loader/loader';
import Car from './Car';
import styles from './cars.module.css';

const Cars = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });

  if (isLoading) {
    return <p className='animate-pulse font-bold text-2xl'>Loading...</p>;
  }

  if (!data) {
    return (
      <p>
        Cannot Load data at the moment, please check your internet connections
      </p>
    );
  }

  return (
    <div className={styles.container}>
      {data?.map((product) => (
        <Car key={product.id} id={product.id} />
      ))}
    </div>
  );
};
export default Cars;
