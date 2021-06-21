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
  },
  [REQUEST_STATES.POST]: {
    'width': '0%'
  },
};

function ProgressBar({ requestState }) {
  return (
    <div className='container'>
      <span
        className={`bar`}
        style={BAR_STYLES[requestState]}
      />
    </div>
  );
}

export default ProgressBar;