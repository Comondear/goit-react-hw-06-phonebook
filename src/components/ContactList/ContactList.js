import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Name, Number, Button } from './ContactList.styled.js';

export const ContactList = ({ list, onDelete }) => {
  return (
    <List>
      {list.map(item => (
        <Item key={item.id}>
          <Name>{item.name + ':'}</Name>
          <Number>{item.number}</Number>
          <Button
            width="100px"
            type="button"
            onClick={() => {
              onDelete(item.id);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
