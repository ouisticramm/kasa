import React from "react";
import "./Apartment_Head.scss";

function Apartment_Head() {
  return (
    <div className="apartment_head">
      <div className="apartment-rental_title">
        <h1>Cozy loft on Canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <div className="apartments_tags">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
      </div>
      <div className="apartment_owner">
        <div className="apartment_owner_details">
          <h3>
            Alexandre <br /> Dumas
          </h3>
          <div className="apartment_owner_badge"></div>
        </div>
        <div className="apartment_owner_stars">
          <span className="on">✮</span>
          <span className="on">✮</span>
          <span className="on">✮</span>
          <span className="off">☆</span>
          <span className="off">☆</span>
        </div>
      </div>
    </div>
  );
}

export default Apartment_Head;
