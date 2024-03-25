'use client';

import { getClientSideSession } from '@/utils/SessionProvider';
import { signOut } from 'next-auth/react';
export default function Home() {
  const { userSession, status } = getClientSideSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }
  return (
    <main className='bg-slate-600 h-screen'>
      <h1>{userSession?.name}</h1>
      <p className='h-[200vh] bg-yellow-300'>
        <button onClick={() => signOut()}>Signout</button>
      </p>
    </main>
  );
}
