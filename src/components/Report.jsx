import React from "react";
import "./css/report.css";

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
    <div className="report text-capital" data-active={isVisibleReport}>
      {Object.entries(categorizedData).map(
        ([categorizedDataKey, categorizedDataValue], index) => (
          <div className="container--py" key={index}>
            <h2 className="title text-capital text-center">
              {categorizedDataKey}
            </h2>
            <ul className="list">
              {categorizedDataValue.map((item, index) => (
                <li className="list-item text-capital text-center" key={index}>
                  {item.name}{" "}
                  <span className="text--accent-1 text-capital">{`(${item.target})`}</span>
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
