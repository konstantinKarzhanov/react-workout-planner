import React from "react";
import Image from "./Image";
import Checkbox from "./Checkbox";
import ExerciseTitle from "./ExerciseTitle";
import "./css/card.css";

const Card = ({ idValue, cardWidth, srcUrl, checkboxValue }) => {
  const styleObj = {
    maxWidth: `${cardWidth}%`,
    flex: `0 0 ${cardWidth}%`,
  };

  return (
    <div style={styleObj} className="card grid grid-container">
      <Image srcUrl={srcUrl} altText={checkboxValue} />
      <Checkbox
        idValue={idValue}
        classValue="sr-only"
        checkboxValue={checkboxValue}
      />
      <ExerciseTitle title={checkboxValue} />
    </div>
  );
};

export default Card;
