import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';
import css from './GlobalStyle.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parcedContacts = JSON.parse(savedContacts);
      return parcedContacts;
    }
    return [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    console.log(contact);

    if (contacts.find(contact => contact.name === name)) {
      alert(name + ' is already in contacts.');
    } else {
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const handleChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div className={css.main}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactsList contacts={getFilterContact()} onDelete={onDelete} />
    </div>
  );
};
