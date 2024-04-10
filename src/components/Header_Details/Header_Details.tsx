'use client';

import Image from 'next/image';
import { FaHeart, FaBell } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import styles from './header_details.module.css';
import { getUserNotifications } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import Notification from '../notification/notification';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover';

const Header_Details = () => {
  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => getUserNotifications(),
  });

  return (
    <div className={`${styles['header--details']}`}>
      <FaHeart className={`${styles['header--details__icon']}`} />

      <div
        className={styles.svg}
        data-attr={
          notifications && notifications.length > 0 ? notifications.length : 0
        }
      >
        {!notifications && (
          <FaBell className={`${styles['header--details__icon']}`} />
        )}
        {notifications && (
          <Popover>
            <PopoverTrigger>
              <FaBell className={`${styles['header--details__icon']}`} />
            </PopoverTrigger>
            <PopoverContent className='z-10'>
              <Notification notification={notifications} />
            </PopoverContent>
          </Popover>
        )}
      </div>

      <IoSettingsSharp className={`${styles['header--details__icon']}`} />
      {/* <div className={`${styles['header--details__profile']} img-container`}>
        <Image src={'/profile-image.png'} alt='App Logo' fill />
      </div> */}

      <Avatar className={`${styles['header--details__profile']} img-container`}>
        <AvatarImage src='https://github.com/shadcn.png ' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
export default Header_Details;
