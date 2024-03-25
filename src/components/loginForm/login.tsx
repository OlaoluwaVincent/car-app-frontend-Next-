'use client';

import Link from 'next/link';
import styles from './login.module.css';
import { useFormStatus } from 'react-dom';
// This component will make use of FormStatus

type Props = {};
const Login = () => {
  const { pending } = useFormStatus();
  return (
    <section className={styles.login}>
      <div className={styles.formGroup}>
        <label htmlFor='email' className={styles.label}>
          Email
        </label>
        <input
          placeholder='Email@email.com'
          required
          type='text'
          name='email'
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
