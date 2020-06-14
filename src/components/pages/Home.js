import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";

const Home = ({ programArray }) => (
  <div>
    <Hero prgArr={programArray} />
    <OrganizationList prgArr={programArray} />
    <WordAboutUs/>
  </div>
);

export default Home;
