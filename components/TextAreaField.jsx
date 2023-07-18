import React from 'react';
import PropTypes from 'prop-types';

function TextAreaField({ placeholder, value, onChange }) {
  return (
    <textarea
      className="w-full p-4 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-lg resize-none "
      rows="4"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

TextAreaField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextAreaField;
