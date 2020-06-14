import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";
import Connections from "../home/Connections";

const Home = ({ prgArray }) => (
  <div>
    <Hero prgArr={prgArray} />
    <OrganizationList prgArr={prgArray} />
    <WordAboutUs/>
    <Connections prgArr={prgArray}/>
  </div>
);

export default Home;
