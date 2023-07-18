import React from 'react';
import PropTypes from 'prop-types';

function IconButton({ icon, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-1 items-center bg-slate-100 p-2 rounded-lg hover:bg-purple-600 hover:text-white"
    >
      <div className="flex items-center mx-auto">
        {icon}
        <p className="mx-1 text-base font-semibold">{text}</p>
      </div>
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
