import {
  Car,
  Home,
  LayoutDashboard,
  MessageSquareText,
  Wallet,
} from 'lucide-react';

export interface SidebarMenuItem {
  id: string;
  name: string;
  link: string;
  icon: JSX.Element;
}

const iconSize = 30;

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  // {
  //   id: 'home',
  //   name: 'Home',
  //   link: '/',
  //   icon: <Home size={iconSize} strokeWidth={'1px'} />,
  // },
  {
    id: 'dashboard',
    name: 'Dashboard',
    link: '/dashboard',
    icon: <LayoutDashboard size={iconSize} strokeWidth={'1px'} />,
  },
  {
    id: 'cars',
    name: 'Car',
    link: '/cars',
    icon: <Car size={iconSize} strokeWidth={'1px'} />,
  },
  // {
  //   id: "insight",
  //   name: 'Insight',
  //   link: '/insight',
  //   icon: <IoBarChart size={iconSize} strokeWidth={'1px'} />,
  // },
  {
    id: 'reimburse',
    name: 'Reimburse',
    link: '/reimburse',
    icon: <Wallet size={iconSize} strokeWidth={'1px'} />,
  },
  {
    id: 'inbox',
    name: 'Inbox',
    link: '/inbox',
    icon: <MessageSquareText size={iconSize} strokeWidth={'1px'} />,
  },
  // {
  //   id: 'calendar',
  //   name: 'Calendar',
  //   link: '/calendar',
  //   icon: <BsCalendar2Month size={iconSize} strokeWidth={'1px'} />,
  // },
  // {
  //   id: Math.random(),
  //   name: 'Logout',
  //   link: '/logout',
  //   icon: <GoSignOut size={iconSize} strokeWidth={'1px'} />,
  // },
];
