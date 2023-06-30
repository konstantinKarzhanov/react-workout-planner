import React from "react";

const ExerciseTitle = ({ title }) => {
  return (
    <h3 className="pad--t1 fs--xxs fw--300 text-center text-capital text--white">
      {title}
    </h3>
  );
};

export default ExerciseTitle;
