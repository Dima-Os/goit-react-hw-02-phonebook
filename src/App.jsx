import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  onChangeInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };
  onAddContact = e => {
    e.preventDefault();
    const contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
      number: '',
    }));
  };
  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    const { name, number } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.onAddContact}>
          <label>
            Please input name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChangeInput}
            />
          </label>
          <label>
            Please input number:
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.onChangeInput}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts: </h2>
        <label>
          Find contact by name:
          <input type="text" name="filter" onChange={this.onChangeInput} />
        </label>

        <ul>
          {visibleContacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
