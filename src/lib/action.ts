'use server';

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
export async function CREATE_ACCOUNT(prevState: any, data: FormData) {
  const username = data.get('username');
  const password = data.get('password');

  //Handle Login with API
  return null;
}
