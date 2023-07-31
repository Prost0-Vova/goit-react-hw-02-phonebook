import React from 'react';
import PropTypes from 'prop-types';

import {ListItem, Button} from '../ContactList.styled';

const ContactItem = ({ contact, deleteContact }) => (
  <ListItem>
    {contact.name}: {contact.number}
    <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
  </ListItem>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;