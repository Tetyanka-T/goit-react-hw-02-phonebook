import PropTypes from 'prop-types';
import s from 'components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h3 className={s.title}>Find contacts by name</h3>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
