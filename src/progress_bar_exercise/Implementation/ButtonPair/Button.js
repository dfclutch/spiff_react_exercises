import React from 'react';
import './Button.scss';

function Button({ color, text, handler }) {
  function handleClick(e) {
    e.preventDefault();
    handler();
  }

  return (
    <div className={`button small medium ${color}`} onClick={handleClick}>
      { text }
    </div>
  );
}

export default Button;