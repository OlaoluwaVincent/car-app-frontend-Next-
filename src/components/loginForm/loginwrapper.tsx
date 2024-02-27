'use client';

import { useFormState } from 'react-dom';
import Login from './login';
import { LOGIN } from '@/lib/action';

type Props = {};
const Loginwrapper = (props: Props) => {
  const [state, formAction] = useFormState(LOGIN, undefined);

  return (
    <form action={formAction}>
      <Login />
    </form>
  );
};
export default Loginwrapper;
