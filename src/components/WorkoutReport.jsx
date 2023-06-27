import React from "react";

const WorkoutReport = ({ workouts }) => {
  // Categorize workouts by muscle groups
  const categorizedWorkouts = workouts.reduce((acc, workouts) => {
    const { bodyPart } = workouts;
    if (!acc[bodyPart]) {
      acc[bodyPart] = [];
    }
    acc[bodyPart].push(workouts);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(categorizedWorkouts).map(([bodyPart, workouts]) => (
        <div key={bodyPart}>
          <h2>{bodyPart}</h2>
          <ul>
            {workouts.map((workout) => (
              <li key={workout.bodyPart}>{workout.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutReport;
