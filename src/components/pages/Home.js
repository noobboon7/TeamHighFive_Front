import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import OrganizationSlider from "../organizations/OrganizationSlider";
import WordAboutUs from "../home/WordAboutUs";
import Connections from "../home/Connections";
import ImpactingPrograms from "../home/ImpactingPrograms";

const Home = () => (
  <div>
    <Hero/>
    <div className="heroOrganizationSlider container-fluid mt-5">
      <OrganizationSlider />
    </div>
{
    // <div className="heroStyles">
    //   <OrganizationList />
    // </div>
}
    <WordAboutUs/>
    <ImpactingPrograms/>
    <Connections/>
  </div>
);

export default Home;
