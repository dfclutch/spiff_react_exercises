import React from 'react';
import Button from './Button';
import './ButtonPair.scss';

function ButtonPair({ startRequest, finishRequest }) {
  return (
    <div className='button-pair small'>
      <Button
        text='START REQUEST'
        color='green'
        handler={startRequest}
      />
      <Button
        text='FINISH REQUEST'
        color='red'
        handler={finishRequest}
      />
    </div>
  );
}

export default ButtonPair;