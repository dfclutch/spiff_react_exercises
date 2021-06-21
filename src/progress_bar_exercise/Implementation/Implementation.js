import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import Button from './ButtonPair/ButtonPair';

function Solution() {
  return (
    <div>
      <ProgressBar />
      <Button
        buttons={[
          { color: 'green', text: 'Start Request' },
          { color: 'red', text: 'Finish Request' },
        ]}
      />
    </div>
  );
}

export default Solution;