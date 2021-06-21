import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ButtonPair from './ButtonPair/ButtonPair';
import { REQUEST_STATES } from './constants';
import Button from './ButtonPair/Button';

function Solution({
  breakpoints
}) {
  const [ requestState, setRequestState ] = useState(REQUEST_STATES.PRE);
  const [ useBreakpoints, setUseBreakpoint ] = useState(false);

  return (
    <div>
      <ProgressBar
        requestState={requestState}
        breakpoints={breakpoints}
      />
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
      <Button
        text='Use Breakpoints?'
        handler={() => {
          useBreakpoints
            ? setUseBreakpoint(false)
            : setUseBreakpoint(true);
        }}
        selected={useBreakpoints}
      />
    </div>
  );
}

export default Solution;