import React from "react";
import Exercise from "../exercise/Exercise";
import Implementation from './Implementation/Implementation';

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return <Implementation breakpoints={[25, 50, 75]} delayTime={2000}/>;
};
