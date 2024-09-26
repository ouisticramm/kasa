import React from "react";
import "./Apartment.scss";
import { NavLink } from "react-router-dom";

function Apartment(props) {
  console.log("props dans Apartmentrental", props);

  return (
    <div className="location">
      <img src={props.imageUrl} />
      <div className="apartment_subtitle">{props.title}</div>
    </div>
  );
}

export default Apartment;
