'use client';

import Link from 'next/link';
import styles from './register.module.css';
import { useFormStatus } from 'react-dom';

type Props = {
  respState: any;
};
const Register = ({ respState }: Props) => {
  const { pending } = useFormStatus();
  return (
    <section className={styles.register}>
      {respState && (
        <p className='text-white text-center first-letter:uppercase drop-shadow-sm'>
          {respState?.message}
        </p>
      )}
      <div
        className={
          ' flex flex-col mx-auto sm:flex-row items-center gap-5 w-full sm:w-[80%]'
        }
      >
        <div className={styles.formGroup}>
          <label htmlFor='fullName' className={styles.label}>
            Full Name
          </label>
          <input
            placeholder='Enter Full Name'
            required
            type='text'
            name='fullName'
            autoComplete='full name'
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            placeholder='Email@email.com'
            required
            autoComplete='email'
            type='email'
            name='email'
            className={styles.input}
          />
        </div>
      </div>

      <div
        className={
          ' flex flex-col mx-auto sm:flex-row items-center gap-5 w-full sm:w-[80%]'
        }
      >
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
          <label htmlFor='cpassword' className={styles.label}>
            Confirm Password
          </label>
          <input
            placeholder='Confirm Password'
            required
            type='password'
            name='cpassword'
            className={styles.input}
          />
        </div>
      </div>
      <div className='text-center'>
        <input type='checkbox' name='role' />{' '}
        <label htmlFor='role'>
          If you Rent cars instead of Hire please check this box
        </label>
      </div>

      <div className={styles.formGroup}>
        <button type='submit' className={styles.registerbtn} disabled={pending}>
          Create Account
        </button>
      </div>

      <Link
        href={'/login'}
        className={styles.redirect + ' ' + styles.formGroup}
      >
        <span>{'Already have an account'} </span>
        <b>Login</b> here
      </Link>
    </section>
  );
};
export default Register;
