'use client';

import styles from './mobil_header.module.css';

import { MdMenu } from 'react-icons/md';
import Search from '../search_input/Search';
import Logo from '../logo/Logo';
import { useState } from 'react';
import { SIDEBAR_MENU } from '@/utils/helperVariables';
import SidebarLink from '../sidebar link/SidebarLink';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { signOut } from 'next-auth/react';
import { getClientSideSession } from '@/utils/SessionProvider';
import { useRouter } from 'next/navigation';
import UserAvatar from '../Header_Details/avatar';

const Mobile_Header = () => {
  const [showSideBar, setshowSideBar] = useState(true);
  const { userSession } = getClientSideSession();
  const navigate = useRouter();
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

          <UserAvatar />
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
              className='flex bg-warning-700 text-white hover:bg-warning-900 py-2 items-center'
            >
              <span className='mr-2'>
                <GoSignOut size={30} />
              </span>
              SignOut
            </button>
          )}
          {!userSession?.sub && (
            <button
              onClick={() => navigate.push('/login')}
              className='flex bg-success-700 text-white hover:bg-success-900 py-2 items-center'
            >
              <span className='mr-2'>
                <GoSignIn size={30} />
              </span>
              Login
            </button>
          )}
        </div>
      )}
    </>
  );
};
export default Mobile_Header;
