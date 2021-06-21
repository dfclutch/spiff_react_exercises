import React from 'react';

import { REQUEST_STATES } from '../constants';

import './ProgressBar.scss';

const BAR_STYLES = {
  [REQUEST_STATES.PRE]: {
    'width': '0%'
  },
  [REQUEST_STATES.LOADING]: {
    'transitionDuration': '15s',
    'width': '90%'
  },
  [REQUEST_STATES.FINISHED]: {
    'transitionDuration': '1s',
    'width': '100%'
  }
};

function ProgressBar({
  percent,
  requestState,
  usePercent
}) {
  const style = !usePercent
    ? BAR_STYLES[requestState]
    : requestState === REQUEST_STATES.LOADING
      ? {
        'transitionDuration': '3s',
        width: `${percent}%`
      }
      : BAR_STYLES[requestState]
  
  return (
    <div className='container'>
      <span
        className={`bar`}
        style={style}
      />
    </div>
  );
}

export default ProgressBar;