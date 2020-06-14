import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";
import Connections from "../home/Connections";

const Home = ({ programArray }) => (
  <div>
    <Hero prgArr={programArray} />
    <OrganizationList prgArr={programArray} />
    <WordAboutUs/>
    <Connections/>
  </div>
);

export default Home;
