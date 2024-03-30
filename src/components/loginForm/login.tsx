'use client';

import Link from 'next/link';
import styles from './login.module.css';
import { useFormStatus } from 'react-dom';
import { useSearchParams } from 'next/navigation';

const Login = ({ respState }: { respState: any }) => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const { pending } = useFormStatus();
  return (
    <section className={styles.login}>
      {respState && (
        <p className='text-white text-center first-letter:uppercase drop-shadow-sm'>
          {respState?.message}
        </p>
      )}
      <div className={styles.formGroup}>
        <label htmlFor='email' className={styles.label}>
          Email
        </label>
        <input
          placeholder='Email@email.com'
          required
          type='text'
          name='email'
          value={email ?? undefined}
          className={styles.input}
          autoComplete='email'
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='password' className={styles.label}>
          Password
        </label>
        <input
          placeholder='Enter Password'
          required
          type='password'
          name='password'
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <button type='submit' className={styles.loginbtn} disabled={pending}>
          Login
        </button>
      </div>

      <Link
        href={'/register'}
        className={styles.redirect + ' ' + styles.formGroup}
      >
        <span>{"Don't have an account"} </span>
        <b>Create Account</b>
      </Link>
    </section>
  );
};
export default Login;
