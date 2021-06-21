import React from 'react';
import { REQUEST_STATES } from '../constants';
import Button from './Button';
import './ButtonPair.scss';

function ButtonPair({ requestState, startRequest, finishRequest }) {
  const primaryButtonText = requestState === REQUEST_STATES.LOADING
    ? 'Loading...'
    : 'START REQUEST';

  return (
    <div className='button-pair small'>
      <Button
        text={primaryButtonText}
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