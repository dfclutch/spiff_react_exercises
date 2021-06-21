import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ButtonPair from './ButtonPair/ButtonPair';
import { REQUEST_STATES } from './constants';
import Button from './ButtonPair/Button';

function startRequestWithBreakpoints(breakpoints, setPercent, delayTime) {
  let bpIndex = 0;
  const breakpointsInterval = setInterval(() => {
    setPercent(breakpoints[bpIndex]);
    bpIndex++;
    if (bpIndex === breakpoints.length) {
      clearInterval(breakpointsInterval);
    }
  }, delayTime);
}

function Solution({
  breakpoints,
  delayTime=2000
}) {
  const [ requestState, setRequestState ] = useState(REQUEST_STATES.PRE);
  const [ useBreakpoints, setUseBreakpoints ] = useState(false);
  const [ percent, setPercent ] = useState(0);

  return (
    <div>
      <ProgressBar
        percent={percent}
        requestState={requestState}
        usePercent={useBreakpoints}
      />
      <ButtonPair
        requestState={requestState}
        startRequest={() => {
          if (requestState !== REQUEST_STATES.PRE) return;

          if (useBreakpoints) {
            startRequestWithBreakpoints(breakpoints, setPercent, delayTime);
          }
          setRequestState(REQUEST_STATES.LOADING)
        }}
        finishRequest={() => {
          setRequestState(REQUEST_STATES.FINISHED);
          setTimeout(() => {
            setRequestState(REQUEST_STATES.PRE);
          }, 4000);
        }}
      />
      <Button
        text='Use Breakpoints?'
        handler={() => {
          useBreakpoints
            ? setUseBreakpoints(false)
            : setUseBreakpoints(true);
        }}
        selected={useBreakpoints}
      />
    </div>
  );
}

export default Solution;