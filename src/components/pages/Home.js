import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";

const Home = ({ prgArray }) => (
  <div>
    <Hero prgArr={prgArray} />
    <OrganizationList prgArr={prgArray} />
  </div>
);

export default Home;
