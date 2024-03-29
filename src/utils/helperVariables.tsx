import { GoHomeFill, GoSignOut } from 'react-icons/go';
import { FaCar } from 'react-icons/fa';
import { IoBarChart } from 'react-icons/io5';
import { IoWalletOutline } from 'react-icons/io5';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsCalendar2Month } from 'react-icons/bs';

export interface SidebarMenuItem {
  id: number;
  name: string;
  link: string;
  icon: JSX.Element;
}

const iconSize = 30;

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  {
    id: Math.random(),
    name: 'Dashboard',
    link: '/dashboard',
    icon: <GoHomeFill size={iconSize} />,
  },
  {
    id: Math.random(),
    name: 'Car',
    link: '/rented-car',
    icon: <FaCar size={iconSize} />,
  },
  {
    id: Math.random(),
    name: 'Insight',
    link: '/insight',
    icon: <IoBarChart size={iconSize} />,
  },
  {
    id: Math.random(),
    name: 'Reimburse',
    link: '/reimburse',
    icon: <IoWalletOutline size={iconSize} />,
  },
  {
    id: Math.random(),
    name: 'Inbox',
    link: '/inbox',
    icon: <BiMessageSquareDetail size={iconSize} />,
  },
  {
    id: Math.random(),
    name: 'Calendar',
    link: '/calendar',
    icon: <BsCalendar2Month size={iconSize} />,
  },
  // {
  //   id: Math.random(),
  //   name: 'Logout',
  //   link: '/logout',
  //   icon: <GoSignOut size={iconSize} />,
  // },
];
