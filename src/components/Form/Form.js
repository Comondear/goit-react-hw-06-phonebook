import css from './Form.module.css'
import React from "react";
import { useState } from 'react';


export const Form = ({onSubmit}) => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
        default:
          break;
    }
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(
      event.target.elements.name.value,
      event.target.elements.number.value
    )
    reset();
  }
  
  const reset = () => {
   setName('');
   setNumber('');
  };


    return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          Name
          <input className={css.input}
            value={name}
            type="text"
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input className={css.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    )
  }
