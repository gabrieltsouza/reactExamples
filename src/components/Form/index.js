import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleInputChanged, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleInputChanged} type="text" value={newTask} />
      <button type="submit">
        <FaPlus></FaPlus>
      </button>
    </form>
  );
}

Form.propTypes = {
  handleInputChanged: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
