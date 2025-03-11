import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox';
import s from './ContactsPage.module.css'

export default function ContactsPage() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contacts}>
      <h1 className={s.h1}>PhoneBook</h1>

      <ContactForm />

      <SearchBox />

      {isLoading && !error && <p>Contacts are loading...</p>}

      {error && <p>{error}</p>}

      {items.length > 0 && <ContactList />}

      {/* <ContactList /> */}
    </div>
  );
}
