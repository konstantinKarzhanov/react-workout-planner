import React from "react";
import Checkbox from "./Checkbox";

const FormElement = ({ idValue, labelValue }) => {
  return (
    <label htmlFor={idValue}>
      {labelValue}
      <Checkbox idValue={idValue} classValue="sr-only" />
    </label>
  );
};

export default FormElement;
