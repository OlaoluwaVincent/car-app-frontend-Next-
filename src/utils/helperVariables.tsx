import { GoHomeFill } from 'react-icons/go';
import { FaCar } from 'react-icons/fa';
import { IoWalletOutline } from 'react-icons/io5';
import { BiMessageSquareDetail } from 'react-icons/bi';

export interface SidebarMenuItem {
  id: string;
  name: string;
  link: string;
  icon: JSX.Element;
}

const iconSize = 30;

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    link: '/dashboard',
    icon: <GoHomeFill size={iconSize} />,
  },
  {
    id: 'cars',
    name: 'Car',
    link: '/cars',
    icon: <FaCar size={iconSize} />,
  },
  // {
  //   id: "insight",
  //   name: 'Insight',
  //   link: '/insight',
  //   icon: <IoBarChart size={iconSize} />,
  // },
  {
    id: 'reimburse',
    name: 'Reimburse',
    link: '/reimburse',
    icon: <IoWalletOutline size={iconSize} />,
  },
  {
    id: 'inbox',
    name: 'Inbox',
    link: '/inbox',
    icon: <BiMessageSquareDetail size={iconSize} />,
  },
  // {
  //   id: 'calendar',
  //   name: 'Calendar',
  //   link: '/calendar',
  //   icon: <BsCalendar2Month size={iconSize} />,
  // },
  // {
  //   id: Math.random(),
  //   name: 'Logout',
  //   link: '/logout',
  //   icon: <GoSignOut size={iconSize} />,
  // },
];
