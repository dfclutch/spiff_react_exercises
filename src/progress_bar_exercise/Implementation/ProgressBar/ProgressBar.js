import React, { useState } from 'react';
import './ProgressBar.scss';

function ProgressBar() {
  const [width, setWidth] = useState(20);

  return (
    <div className='container'>
      <span
        className='bar'
        style={{width: `${width}%`}}
      />
    </div>
  );
}

export default ProgressBar;