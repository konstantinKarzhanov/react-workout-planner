import React from "react";
import CarouselCard from "./CarouselCard";

const CarouselBoxCards = () => {
  return (
    <div className="slider">
      <CarouselCard url="https://via.placeholder.com/200?text=1" />
      <CarouselCard url="https://via.placeholder.com/220?text=2" />
      <CarouselCard url="https://via.placeholder.com/240?text=3" />
      <CarouselCard url="https://via.placeholder.com/260?text=4" />
      <CarouselCard url="https://via.placeholder.com/280?text=5" />
      <CarouselCard url="https://via.placeholder.com/300?text=6" />
      <CarouselCard url="https://via.placeholder.com/320?text=7" />
      <CarouselCard url="https://via.placeholder.com/340?text=8" />
      <CarouselCard url="https://via.placeholder.com/360?text=9" />
    </div>
  );
};

export default CarouselBoxCards;
