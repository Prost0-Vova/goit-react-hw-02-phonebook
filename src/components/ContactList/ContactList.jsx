import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import {ContList} from './ContactList.styled'


const ContactList = ({ contacts, deleteContact }) => (
  <ContList>
    {contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
    ))}
  </ContList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;