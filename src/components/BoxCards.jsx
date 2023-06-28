import React from "react";
import Card from "./Card";

const BoxCards = ({ xPosition, cardWidth, data }) => {
  const styleObj = {
    transform: `translateX(${
      (Math.abs(xPosition) < 0.0001 ? 0 : xPosition) * cardWidth
    }%)`,
  };

  return (
    <div style={styleObj} className="box--cards flex flex--ai-c">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            idValue={`card-${++index}`}
            cardWidth={cardWidth}
            srcUrl={item.gifUrl}
            checkboxValue={item.name}
          />
        );
      })}
    </div>
  );
};

export default BoxCards;
