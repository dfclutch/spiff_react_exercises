import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import Button from './ButtonPair/ButtonPair';

function Solution() {
  return (
    <div>
      <ProgressBar />
      <Button
        startRequest={() => console.log('start')}
        finishRequest={() => console.log('finish')}
      />
    </div>
  );
}

export default Solution;