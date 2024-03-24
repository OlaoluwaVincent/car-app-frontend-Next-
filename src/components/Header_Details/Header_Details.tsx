'use client';

import Image from 'next/image';
import { FaHeart, FaBell } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import styles from './header_details.module.css';

const Header_Details = () => {
  return (
    <div className={`${styles['header--details']}`}>
      <FaHeart className={`${styles['header--details__icon']}`} />
      {/* 
      <div className={styles.svg} data-attr='5'> */}

      <div className={styles.svg}>
        <FaBell className={`${styles['header--details__icon']}`} />
      </div>

      <IoSettingsSharp className={`${styles['header--details__icon']}`} />
      <div className={`${styles['header--details__profile']} img-container`}>
        <Image src={'/profile-image.png'} alt='App Logo' fill />
      </div>
    </div>
  );
};
export default Header_Details;
