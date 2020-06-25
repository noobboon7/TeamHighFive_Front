import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import OrganizationSlider from "../organizations/OrganizationSlider";
import WordAboutUs from "../home/WordAboutUs";
import Connections from "../home/Connections";

const Home = () => (
  <div>
    <Hero/>
    <div className="heroOrganizationSlider container mt-5">
      <OrganizationSlider />
    </div>
{
    // <div className="heroStyles">
    //   <OrganizationList />
    // </div>
}
    <WordAboutUs/>
    <Connections/>
  </div>
);

export default Home;
