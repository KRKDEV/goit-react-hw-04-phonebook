import css from './Contacts.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css['contacts__list']}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css['contacts__item']}>
          {name}: {number}
          <button
            type="button"
            name="Delete"
            className={css['contacts__btn']}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
