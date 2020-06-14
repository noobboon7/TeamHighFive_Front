import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";

const Home = ({ organizations_array }) => (
  <div>
    <Hero organizations_array={organizations_array} />
    <OrganizationList organizations_array={organizations_array} />
  </div>
);

export default Home;
