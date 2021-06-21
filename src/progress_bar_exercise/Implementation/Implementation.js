import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ButtonPair from './ButtonPair/ButtonPair';
import { REQUEST_STATES } from './constants';

function Solution() {
  const [ barState, setBarState ] = useState(REQUEST_STATES.PRE);

  return (
    <div>
      <ProgressBar barState={barState}/>
      <ButtonPair
        startRequest={() => setBarState(REQUEST_STATES.LOADING)}
        finishRequest={() => {
          setBarState(REQUEST_STATES.FINISHED);
          setTimeout(() => {
            setBarState(REQUEST_STATES.POST);
          }, 4000);
        }}
      />
    </div>
  );
}

export default Solution;