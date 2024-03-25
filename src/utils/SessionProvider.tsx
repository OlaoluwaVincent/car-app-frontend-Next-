'use client';
import { SessionProvider, useSession } from 'next-auth/react';
import { UserAuth } from './typings';

type Props = {
  children: React.ReactNode;
};
export function getClientSideSession() {
  const { data: session, status } = useSession();
  const userSession: UserAuth | undefined = session?.user;
  return { userSession, status };
}
const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
