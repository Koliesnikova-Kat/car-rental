import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import { setNameFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => dispatch(setNameFilter(e.target.value));

  return (
    <div className={styles.container}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type='text'
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
