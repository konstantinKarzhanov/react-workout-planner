import React from "react";

const ExerciseHeader = ({ headerValue }) => {
  return (
    <h2 className="pad--t1 text-center text-capital text--white bg-c--accent-3">
      {headerValue}
    </h2>
  );
};

export default ExerciseHeader;
