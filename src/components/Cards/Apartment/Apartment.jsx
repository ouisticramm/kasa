import React from "react";
import "./Apartment.scss";
import { Link, NavLink } from "react-router-dom";

function Apartment(props) {
  return (
    <Link
      to="/Cards"
      state={{
        apartmentId: props.id,
      }}
    >
      <div className="location">
        <img src={props.imageUrl} alt="image" />
        <div className="apartment_subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default Apartment;
