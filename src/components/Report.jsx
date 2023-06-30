import React from "react";
import "./css/report.css";

const Report = ({ isVisibleReport, titleValue, data }) => {
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
    <div
      className="report container--pall text-capital"
      data-active={isVisibleReport}
    >
      <h2 className="container--pall fs--m fw--500 text--accent-5">
        {titleValue}
      </h2>
      {Object.entries(categorizedData).map(
        ([categorizedDataKey, categorizedDataValue], index) => (
          <div key={index} className="container--pall">
            <h3 className="fs--s fw--400 text--accent-1">
              {categorizedDataKey}
            </h3>
            <ul className="fw--300">
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
