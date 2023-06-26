import React from "react";

const Checkbox = ({ idValue, classValue, checkboxValue }) => {
  return (
    <input
      id={idValue}
      type="checkbox"
      className={classValue}
      {...(checkboxValue ? { value: checkboxValue } : {})}
    />
  );
};

export default Checkbox;
