'use client';

import Link from 'next/link';
import styles from './register.module.css';
import { useFormStatus } from 'react-dom';

type Props = {};
const Register = (props: Props) => {
  const { pending } = useFormStatus();
  return (
    <section className={styles.register}>
      {/* FIRST AND LAST NAME COMMENTED OUT FOR NOW */}
      {/* <div
        className={
          ' flex flex-col mx-auto sm:flex-row items-center gap-5 w-full sm:w-[80%]'
        }
      >
        <div className={styles.formGroup}>
          <label htmlFor='firstname' className={styles.label}>
            First Name
          </label>
          <input
            placeholder='Enter First Name'
            type='text'
            name='firstname'
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='lastname' className={styles.label}>
            Last Name
          </label>
          <input
            placeholder='Enter Last Name'
            type='text'
            name='lastname'
            className={styles.input}
          />
        </div>
      </div> */}
      <div
        className={
          ' flex flex-col mx-auto sm:flex-row items-center gap-5 w-full sm:w-[80%]'
        }
      >
        <div className={styles.formGroup}>
          <label htmlFor='username' className={styles.label}>
            UserName
          </label>
          <input
            placeholder='Choose UserName'
            type='text'
            name='username'
            autoComplete='username'
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            placeholder='Email@email.com'
            autoComplete='email'
            type='text'
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
            type='password'
            name='cpassword'
            className={styles.input}
          />
        </div>
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
