import React, { Component } from 'react';
import s from './AddContactForm.module.css';
class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChangeInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.onFormSubmit}>
        <label className={s.label}>
          Please input name:
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeInput}
          />
        </label>
        <label className={s.label}>
          Please input number:
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.onChangeInput}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default AddContactForm;
