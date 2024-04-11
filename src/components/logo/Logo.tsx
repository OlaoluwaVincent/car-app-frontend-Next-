import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.css';

type Props = {};
const Logo = (props: Props) => {
  return (
    <Link href={'/'} className={`${styles['header--logo']} img-container`}>
      <Image src={'/Logo.png'} alt='App Logo' fill />
    </Link>
  );
};
export default Logo;
