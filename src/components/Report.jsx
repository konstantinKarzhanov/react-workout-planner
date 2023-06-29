import React from "react";

const Report = ({ isVisibleReport, data }) => {
  // Categorize workouts by muscle groups
  const categorizedData = data.reduce((acc, current) => {
    const { bodyPart } = current;
    if (!acc[bodyPart]) {
      acc[bodyPart] = [];
    }
    acc[bodyPart].push(current);
    return acc;
  }, {});
  return (
    <div className="report" data-active={isVisibleReport}>
      {Object.entries(categorizedData).map(
        ([categorizedDataKey, categorizedDataValue], index) => (
          <div key={index}>
            <h2>{categorizedDataKey}</h2>
            <ul>
              {categorizedDataValue.map((item, index) => (
                <li key={index}>
                  {item.name}{" "}
                  <span className="text--accent-1">{`(${item.target})`}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default Report;
