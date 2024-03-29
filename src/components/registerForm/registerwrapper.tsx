'use client';

import { useFormState } from 'react-dom';
import Register from './register';
import { CREATE_ACCOUNT } from '@/lib/action';

type Props = {};
const Registerwrapper = (props: Props) => {
  const [state, formAction] = useFormState(CREATE_ACCOUNT, undefined);

  return (
    <form action={formAction}>
      <Register />
    </form>
  );
};
export default Registerwrapper;
