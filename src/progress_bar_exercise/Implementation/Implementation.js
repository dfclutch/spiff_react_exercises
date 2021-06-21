import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ButtonPair from './ButtonPair/ButtonPair';
import { REQUEST_STATES } from './constants';

function Solution() {
  const [ requestState, setRequestState ] = useState(REQUEST_STATES.PRE);

  return (
    <div>
      <ProgressBar requestState={requestState}/>
      <ButtonPair
        requestState={requestState}
        startRequest={() => setRequestState(REQUEST_STATES.LOADING)}
        finishRequest={() => {
          setRequestState(REQUEST_STATES.FINISHED);
          setTimeout(() => {
            setRequestState(REQUEST_STATES.POST);
          }, 4000);
        }}
      />
    </div>
  );
}

export default Solution;