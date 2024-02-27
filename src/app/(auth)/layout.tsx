import styles from './auth.module.css';

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return <div className={styles.auth}>{children}</div>;
};
export default layout;
