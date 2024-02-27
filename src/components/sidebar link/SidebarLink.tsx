'use client';
import styles from './sidebar.module.css';

import { SidebarMenuItem } from '@/utils/helperVariables';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  menu: SidebarMenuItem;
};

const SidebarLink = ({ menu }: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <Link key={menu.id} href={menu.link}>
      <ul className={styles.listitems}>
        <li
          className={`
                    ${styles.listitem} ${isActive(menu.link) && styles.active}`}
        >
          {menu.icon}
          {menu.name}
        </li>
      </ul>
    </Link>
  );
};
export default SidebarLink;
