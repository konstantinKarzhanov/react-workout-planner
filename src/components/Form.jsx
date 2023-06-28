import React from "react";
import FormElement from "./FormElement";
import "./css/form-muscle-groups.css";

const Form = ({ onClick, data }) => {
  return (
    <>
      <form onClick={onClick}>
        <div className="form-muscle-groups grid grid-container grid-gap--a text-center text-capital text--white">
          {data.toSorted().map((item, index) => (
            <FormElement
              key={index}
              idValue={`group-${++index}`}
              labelValue={item}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default Form;
