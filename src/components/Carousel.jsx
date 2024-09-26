import React from "react";
import "./Carousel.scss";

function Carousel(props) {
  return (
    <div className="carousel">
      <img src={props.imageUrl} alt="image" />
    </div>
  );
}

export default Carousel;
