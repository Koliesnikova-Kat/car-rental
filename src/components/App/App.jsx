import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={s.h1}>PhoneBook</h1>

      <ContactForm />

      <SearchBox />

      {isLoading && !error && <p>Contacts are loading...</p>}

      {error && <p>{error}</p>}

      {items.length > 0 && <ContactList />}
    </>
  );
}
