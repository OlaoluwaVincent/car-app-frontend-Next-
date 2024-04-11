'use client';

import styles from './header_details.module.css';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { getClientSideSession } from '@/utils/SessionProvider';

const UserAvatar = () => {
  const { userSession } = getClientSideSession();
  return (
    <Avatar>
      <AvatarImage
        src={userSession?.image || 'https://github.com/shadcn.png'}
      />
      <AvatarFallback>
        {userSession?.name?.slice(0, 1).toUpperCase() || 'N'}
      </AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;
