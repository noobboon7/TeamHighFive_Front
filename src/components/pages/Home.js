import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";
import Connections from "../home/Connections";

const Home = ({ organizations_array }) => (
  <div>
    <Hero organizations_array={organizations_array} />
    <WordAboutUs/>
    <Connections/>
    <OrganizationList organizations_array={organizations_array} />
  </div>
);

export default Home;
