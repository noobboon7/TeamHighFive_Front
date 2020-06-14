import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";

const Home = ({ prgArray }) => (
  <div>
    <Hero prgArr={prgArray} />
    <OrganizationList prgArr={prgArray} />
    <WordAboutUs/>

  </div>
);

export default Home;
