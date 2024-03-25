'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { UserAuth } from './typings';

export async function getServerSideSession() {
  const session = await getServerSession(authOptions);
  const userSession: UserAuth | undefined = session?.user;
  return userSession;
}
