'use client';
import { fetchCars } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';
import LoadingState from '../loader/loader';
import Car from './Car';

const Cars = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div>
      {data?.map((product) => (
        <Car key={product.id} id={product.id} />
      ))}
    </div>
  );
};
export default Cars;
