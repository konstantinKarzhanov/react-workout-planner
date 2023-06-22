import React from "react";
import Button from "./Button";
import CarouselBoxCards from "./CarouselBoxCards";
import "./_carousel.css";

const ContainerCarousel = () => {
  return (
    <div className="container">
      <Button classValue="btn-carousel prev" value="prev" />
      <CarouselBoxCards />
      <Button classValue="btn-carousel next" value="next" />
    </div>
  );
};

export default ContainerCarousel;
