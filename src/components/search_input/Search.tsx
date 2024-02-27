import { CiSearch } from 'react-icons/ci';
import styles from './search.module.css';

const Search = () => {
  return (
    <form className={`${styles['header--search']}`}>
      <input
        type='text'
        placeholder='Search car name/brand'
        className={styles.input}
      />
      <CiSearch className={`${styles['header--search__icon']}`} />
    </form>
  );
};
export default Search;
