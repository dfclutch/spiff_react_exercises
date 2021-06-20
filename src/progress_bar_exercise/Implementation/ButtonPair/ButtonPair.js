import React from 'react';
import Button from './Button';

function ButtonPair({ buttons }) {
  return (
    <>
      {
        buttons.map((buttonProps) => {
          return <Button {...buttonProps}/>;
        })
      }
    </>
  );
}

export default ButtonPair;