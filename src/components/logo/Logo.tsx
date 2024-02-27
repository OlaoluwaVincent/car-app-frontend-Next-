import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.css';

type Props = {};
const Logo = (props: Props) => {
  return (
    <div className={`${styles['header--logo']} img-container`}>
      <Link href={'/'}>
        <Image src={'/Logo.png'} alt='App Logo' fill />
      </Link>
    </div>
  );
};
export default Logo;
