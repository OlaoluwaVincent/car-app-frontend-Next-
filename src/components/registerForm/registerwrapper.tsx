'use client';

import { useFormState } from 'react-dom';
import Register from './register';
import { CREATE_ACCOUNT } from '@/lib/action';
import { useRouter } from 'next/navigation';
import { getClientSideSession } from '@/utils/SessionProvider';
import { useLayoutEffect } from 'react';

type Props = {};
const Registerwrapper = (props: Props) => {
  const [state, formAction] = useFormState(CREATE_ACCOUNT, undefined);
  const router = useRouter();

  const { userSession } = getClientSideSession();

  useLayoutEffect(() => {
    if (userSession?.sub) {
      router.back();
    }
  }, [userSession]);

  if (state && state.message == 'successful') {
    router.push(`/login?email=${state.result.email}`);
  }
  return (
    <form action={formAction}>
      <Register respState={state} />
    </form>
  );
};
export default Registerwrapper;
