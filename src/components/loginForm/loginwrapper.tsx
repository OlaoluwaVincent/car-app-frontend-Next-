'use client';

import { useFormState } from 'react-dom';
import Login from './login';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

type Props = {};
const Loginwrapper = (props: Props) => {
  const [state, formAction] = useFormState(LOGIN, undefined);
  const router = useRouter();
  const session = useSession();

  useLayoutEffect(() => {
    if (session && session.data?.user) {
      router.replace('/dashboard');
    }
  }, [session]);

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
      if (session.data?.user) {
        router.replace('/');
      }
    }
  }

  return (
    <form action={formAction}>
      {state && state.error && (
        <p className='text-white uppercase text-center text-lg font-bold'>
          {state.message}
        </p>
      )}
      <Login />
    </form>
  );
};
export default Loginwrapper;
