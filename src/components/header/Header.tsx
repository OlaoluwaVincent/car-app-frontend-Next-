import styles from './header.module.css';
import Header_Details from '../Header_Details/Header_Details';
import Search from '../search_input/Search';
import Logo from '../logo/Logo';
import Mobile_Header from './Mobile_Header';
import React from 'react';

type Props = {};
const header = async (props: Props) => {
  return (
    <header className={`${styles.bg}`}>
      <React.Fragment>
        <div className={styles.header}>
          <Logo />
          <Search />

          {/* Client Component */}
          <Header_Details />
        </div>
      </React.Fragment>
      <Mobile_Header />
    </header>
  );
};
export default header;
