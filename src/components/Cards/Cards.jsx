import React, { useEffect, useState } from "react";
import "./Cards.scss";
import Apartmentrental from "./Apartment/Apartment";
import { NavLink } from "react-router-dom";

function Cards() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <NavLink to={`/Cards/${apartment.id}`} key={apartment.id}>
          <Apartmentrental title={apartment.title} imageUrl={apartment.cover} />
        </NavLink>
      ))}
    </div>
  );
}

export default Cards;
