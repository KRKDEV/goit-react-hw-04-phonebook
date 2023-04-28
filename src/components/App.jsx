import { Component } from 'react';
import css from './App.module.css';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  filterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form contacts={this.state.contacts} onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filterr} onChange={this.filterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
