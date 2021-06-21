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

function getBarStyle({requestState, usePercent, percent}) {
  return !usePercent
    ? BAR_STYLES[requestState]
    : requestState === REQUEST_STATES.LOADING
      ? {
        'transitionDuration': '3s',
        width: `${percent}%`
      }
      : BAR_STYLES[requestState]
}

function ProgressBar({
  percent,
  requestState,
  usePercent
}) {
  return (
    <div className='container'>
      <span
        className={`bar`}
        style={getBarStyle({requestState, usePercent, percent})}
      />
    </div>
  );
}

export default ProgressBar;