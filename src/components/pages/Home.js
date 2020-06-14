import React from "react";

import Hero from "../hero/Hero";
import OrganizationList from "../organizations/OrganizationList";
import WordAboutUs from "../home/WordAboutUs";
import Connections from "../home/Connections";

const Home = ({ programArray }) => (
  <div>
    <Hero prgArr={programArray} />
    <div className="heroStyles">
    <OrganizationList prgArr={programArray} />
    </div>
    <WordAboutUs/>
    <Connections prgArr={programArray}/>
  </div>
);

export default Home;
