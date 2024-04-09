'use client';

import { fetchCarID } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

const SingleCarPage = ({ params }: { params: { slug: string } }) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  const { isLoading, data } = useQuery({
    queryKey: ['car', params.slug],
    queryFn: () => fetchCarID(params.slug),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <div>SingleCarPage {params.slug}</div>;
};
export default SingleCarPage;
