import React from "react";
import Checkbox from "./Checkbox";

const FormElement = ({ idValue, labelValue }) => {
  return (
    <label htmlFor={idValue} className="pad--t1 b-radius bg-c--accent-1">
      {labelValue}
      <Checkbox idValue={idValue} classValue="sr-only" />
    </label>
  );
};

export default FormElement;
