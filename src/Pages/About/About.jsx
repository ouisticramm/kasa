import Banner from "../../Layout/Banner/Banner";
import ABanner from "../../components/Aboutbanner/ABanner";
import Apartment_description from "../../components/Collapse";
import "./About.scss";
function About() {
  return (
    <>
      <ABanner />
      <div className="about_container">
        <Apartment_description />
        <Apartment_description />
        <Apartment_description />
        <Apartment_description />
      </div>
    </>
  );
}

export default About;
