import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Form.module.css';

const Form = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists = contacts.some(contact => contact.name === name);

    if (contactExists) {
      alert(`${name} is already existing in contacts`);
      return;
    }

    onSubmit({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css['form__btn']}>
        Add contact
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
};
