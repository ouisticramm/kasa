import "./Apartmentrental.scss";
import Apartment_description from "../../components/Collapse";
import Carousel from "../../components/Carousel";
import Apartment_Head from "../../components/Apartment_Head";

function Apartmentrental() {
  const params
  return (
    <div className="Apartment-rental">
      <Carousel />
      <Apartment_Head />
      <div className="ADarea">
        <Apartment_description />
        <Apartment_description />
      </div>
    </div>
  );
}

export default Apartmentrental;
