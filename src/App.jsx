import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

import s from './App.module.css';

import Container from './components/Container';
import Filter from './components/Filter';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = ({ name, number }) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    const existElement = this.state.contacts.find(el => el.name === name);
    existElement
      ? alert(`${name} has already exist`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  onDeleteButton = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1 className={s.mainHeading}>Phonebook</h1>
        <AddContactForm onAddContact={this.onAddContact} />
        <h2>Contacts: </h2>
        <Filter onChangeFilter={this.onChangeFilter} />
        <ContactsList
          visibleContacts={visibleContacts}
          onDeleteButton={this.onDeleteButton}
        />
      </Container>
    );
  }
}

export default App;
