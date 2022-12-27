import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Form, Label, Button, Input } from './ContactsForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const InputId = nanoid();
  const TellId = nanoid();

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={InputId}>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={InputId}
        />
      </Label>
      <Label htmlFor={TellId}>
        Telephone
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={TellId}
        />
      </Label>
      <Button type="submit" disabled={!name}>
        Add contact
      </Button>
    </Form>
  );
};
