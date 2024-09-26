import "./Apartmentrental.scss";
import Apartment_description from "../../components/Collapse";
import Carousel from "../../components/Carousel";
import Apartment_Head from "../../components/Apartment_Head";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Apartmentrental() {
  const location = useLocation();
  console.log("location:", location);
  console.log("our apartment is is:", location.state.apartmentId);
  const [selectedCards, setSelectedCards] = useState(null);

  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((cards) => {
        const apartment = cards.find(
          (card) => card.id === location.state.apartmentId
        );
        setSelectedCards(apartment);
        console.log("selectedCards:", apartment);
      })
      .catch(console.error);
  }

  if (selectedCards == null) return <div>...Loading</div>;

  return (
    <div className="Apartment-rental">
      {selectedCards && (
        <div>
          <Carousel imageUrl={selectedCards.cover} />
          <Apartment_Head selectedCards={selectedCards} />
          <div className="ADarea">
            <Apartment_description
              title="description"
              content={selectedCards.description}
            />
            <Apartment_description
              title="equipement"
              content={selectedCards.equipement}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Apartmentrental;
