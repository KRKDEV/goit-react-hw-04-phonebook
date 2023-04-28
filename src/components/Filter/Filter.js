import css from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
