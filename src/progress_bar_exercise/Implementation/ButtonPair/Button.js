import React from 'react';
import './Button.scss';

function Button({ color, text, handler, selected }) {
  function handleClick(e) {
    e.preventDefault();
    handler();
  }

  return (
    <div
      className={`button small medium ${color || ''} ${selected ? 'solid' : ''}`}
      onClick={handleClick}
    >
      { text }
    </div>
  );
}

export default Button;