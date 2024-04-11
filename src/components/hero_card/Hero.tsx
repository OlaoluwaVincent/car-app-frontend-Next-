import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-5 justify-between w-full px-5'>
      <Link href={'#pick-up'} className='flex-1 w-full block'>
        <div className='hidden md:block relative h-[300px] w-full'>
          <Image src={'/Ads1.png'} alt='Banner Image' fill />
        </div>
      </Link>
      <Link href={'#drop-off'} className='flex-1 w-full block'>
        <div className='relative h-[220px] md:h-[300px] w-full'>
          <Image src={'/Ads2.png'} alt='Banner Image' fill />
        </div>
      </Link>
    </div>
  );
};
export default Hero;
