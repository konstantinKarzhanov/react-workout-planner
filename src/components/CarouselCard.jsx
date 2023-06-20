import React from "react";

const CarouselCard = ({ url }) => {
  return (
    <div className="card">
      <img src={url} alt="alt text" />
    </div>
  );
};

export default CarouselCard;
