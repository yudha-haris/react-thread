import React from 'react';
import PropTypes from 'prop-types';

function TextInputField({
  placeholder, type = 'text', value, onChange,
}) {
  return (
    <div className="relative w-full mt-4">
      <input
        type={type}
        className="block w-full px-4 py-3 bg-purple-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

TextInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInputField.defaultProps = {
  type: 'text',
};

export default TextInputField;
