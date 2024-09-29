import ABanner from "../../components/Aboutbanner/ABanner";

import CollapseA from "../../components/CollapseA/CollapseA";
import "./About.scss";

function About() {
  return (
    <>
      <ABanner />
      <div className="about_container">
        <CollapseA title="Fiabilité" content="important" />
        <CollapseA title="Respect" content="important" />
        <CollapseA title="Service" content="important" />
        <CollapseA title="Responsabilité" content="important" />
      </div>
    </>
  );
}

export default About;
