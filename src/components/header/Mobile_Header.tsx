'use client';

import styles from './mobil_header.module.css';

import { MdMenu } from 'react-icons/md';
import Image from 'next/image';
import Search from '../search_input/Search';
import Logo from '../logo/Logo';
import { useState } from 'react';
import { SIDEBAR_MENU } from '@/utils/helperVariables';
import SidebarLink from '../sidebar link/SidebarLink';
import { GoSignOut } from 'react-icons/go';
import { signOut } from 'next-auth/react';
import { getClientSideSession } from '@/utils/SessionProvider';

type Props = {};
const Mobile_Header = (props: Props) => {
  const [showSideBar, setshowSideBar] = useState(true);
  const { userSession } = getClientSideSession();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.topHeader}>
          <Logo />
          <MdMenu
            className={styles.icon}
            onClick={() => setshowSideBar(!showSideBar)}
          />
        </div>

        <div className={styles.bottomHeader}>
          <Search />

          <div className={`${styles.profile} img-container`}>
            <Image src={'/profile-image copy.png'} alt='App Logo' fill />
          </div>
        </div>
      </div>

      {showSideBar && (
        <div className={styles.sidebar}>
          {SIDEBAR_MENU.map((menu) => (
            <SidebarLink key={menu.id} menu={menu} />
          ))}
          {userSession?.sub && (
            <button
              onClick={() => signOut()}
              className='flex bg-yellow-700 text-white hover:bg-yellow-900 py-2'
            >
              <span className='mr-2'>
                <GoSignOut size={30} />
              </span>
              SignOut
            </button>
          )}
        </div>
      )}
    </>
  );
};
export default Mobile_Header;
