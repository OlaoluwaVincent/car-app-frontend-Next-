'use client';

import { useFormState } from 'react-dom';
import Login from './login';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { getClientSideSession } from '@/utils/SessionProvider';

type Props = {};
const Loginwrapper = (props: Props) => {
  const [state, formAction] = useFormState(LOGIN, undefined);
  const router = useRouter();

  const { userSession } = getClientSideSession();

  useLayoutEffect(() => {
    if (userSession?.sub) {
      router.back();
    }
  }, [userSession]);

  async function LOGIN(prevState: any, data: FormData) {
    const email = data.get('email');
    const password = data.get('password');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: 'http://localhost:3000/',
    });
    //Handle Login with API

    if (res?.error) {
      return JSON.parse(res.error);
    }

    if (res?.ok) {
      router.replace('/');
    }
  }

  return (
    <form action={formAction}>
      <Login respState={state} />
    </form>
  );
};
export default Loginwrapper;
