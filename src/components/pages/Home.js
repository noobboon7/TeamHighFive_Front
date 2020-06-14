import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";

const Home = ({ organizations_array }) => (
  <div>
    <Hero organizations_array={organizations_array} />
    <OrganizationList organizations_array={organizations_array} />
    <WordAboutUs/>
  </div>
);

export default Home;
