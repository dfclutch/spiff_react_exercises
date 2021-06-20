import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import Button from './ButtonPair/ButtonPair';

function Solution() {
  return (
    <>
      <ProgressBar />
      <Button
        buttons={[
          { color: 'green', text: 'Start Request' },
          { color: 'red', text: 'Finish Request' },
        ]}
      />
    </>
  );
}

export default Solution;