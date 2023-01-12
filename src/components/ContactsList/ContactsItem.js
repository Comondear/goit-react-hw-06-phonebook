import css from './Contacts.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';


export const ContactsItem = ({ id}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    const users = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilterContact = users.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

    return (
        <>
            {getFilterContact.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    {name}:{number}
                    <button className={css.btn} type='submit'
                    onClick={handleDelete}>Delete</button>
                </li>
            ))}
            </>
        )}