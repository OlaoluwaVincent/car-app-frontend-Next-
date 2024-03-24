'use client';
import { clientSession } from '@/utils/session';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (Component: any) => {
  return function WithAuth(props: any) {
    const session = clientSession;
    useEffect(() => {
      if (session) {
        redirect('/');
      }
    }, []);

    if (!session) {
      return null;
    }

    return <Component {...props} />;
  };
};
export default withAuth;
