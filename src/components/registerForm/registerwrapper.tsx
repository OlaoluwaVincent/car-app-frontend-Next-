'use client';

import { useFormState } from 'react-dom';
import Register from './register';
import { LOGIN } from '@/lib/action';

type Props = {};
const Registerwrapper = (props: Props) => {
  const [state, formAction] = useFormState(LOGIN, undefined);

  return (
    <form action={formAction}>
      <Register />
    </form>
  );
};
export default Registerwrapper;
