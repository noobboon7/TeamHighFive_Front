import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";

const Home = ({ organizations_array }) => (
  <div>
    <Hero organizations_array={organizations_array} />
    <WordAboutUs/>
    <OrganizationList organizations_array={organizations_array} />
  </div>
);

export default Home;
