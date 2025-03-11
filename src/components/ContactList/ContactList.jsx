import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/slice';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <Contact
            id={contact.id}
            contactName={contact.name}
            contactPhone={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
