'use server';

import { registerUser } from './axios_callls';

// export async function LOGIN(prevState: any, data: FormData) {
//   const email = data.get('email');
//   const password = data.get('password');

//   console.log(email, password);

//   const res = await signIn('credentials', {
//     redirect: false,
//     email,
//     password,
//   });
//   //Handle Login with API
//   return res?.url;
// }

export interface Register {
  name: string;
  email: string;
  password: string;
  role: string;
}
export async function CREATE_ACCOUNT(prevState: any, data: FormData) {
  const name = data.get('fullName') as string;
  const email = data.get('email') as string;
  const password = data.get('password') as string;
  const cpassword = data.get('cpassword') as string;
  let role = data.get('role') as string;

  if (password !== cpassword) {
    const error = {
      status: 400,
      message: 'Passwords do not match',
    };
    return error;
  }

  if (role == 'on') {
    role = 'provider';
  } else {
    role = 'customer';
  }

  const reg = await registerUser({ email, password, name, role });
  return reg;
}
