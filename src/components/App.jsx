import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  };

  addContact = (newContact) => {
    const { contacts } = this.state;
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));

  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

 
  handleFilterChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
 

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;