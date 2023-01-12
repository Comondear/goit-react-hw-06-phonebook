import { ContactsItem } from "./ContactsItem";
import css from './Contacts.module.css'

export const ContactsList = () => {
  return (
    <>
      <ul className={css.list}>
        <ContactsItem/>
      </ul>
    </>
  );
};
            
       
