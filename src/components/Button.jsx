import React from "react";

const Button = ({ onClick, classValue, datasetValue, value }) => {
  return (
    <button
      onClick={onClick}
      className={classValue}
      {...(datasetValue ? { [datasetValue]: "" } : {})}
    >
      {value}
    </button>
  );
};

export default Button;
