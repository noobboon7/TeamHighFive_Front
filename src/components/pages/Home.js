import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";
import Connections from "../home/Connections";

const Home = () => (
  <div>
    <Hero/>
    <div className="heroStyles">
    <OrganizationList />
    </div>
    <WordAboutUs/>
    <Connections/>
  </div>
);

export default Home;
