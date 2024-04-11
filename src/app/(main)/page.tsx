import Cars from '@/components/cars/Cars';
import Hero from '@/components/hero_card/Hero';
import BigButton from '@/components/pick/BigButton';
import Pick from '@/components/pick/Pick';
import { getServerSideSession } from '@/utils/session';

type Props = {};
const Homepage = async (props: Props) => {
  const userSession = await getServerSideSession();
  return (
    <div>
      <div className='mt-5 space-y-5'>
        {/* Hero section */}
        <Hero />
        <div className='flex flex-col lg:flex-row gap-5 px-5 items-center'>
          <Pick id='pick' label='pick-up' />
          <BigButton />
          <Pick id='drop' label='drop-off' />
        </div>
        {/* Cars section */}
        <Cars />
      </div>
    </div>
  );
};
export default Homepage;
