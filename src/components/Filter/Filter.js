import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from 'components/ContactForm/ContactsForm.styled';

export const Filter = ({ value, onChange }) => {
  const filterID = nanoid();

  return (
    <div>
      <Label htmlFor={filterID}>
        Find contacts by name
        <Input id={filterID} type="text" value={value} onChange={onChange} />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
