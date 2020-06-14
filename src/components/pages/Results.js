import React from "react";

import OrganizationsList from "../organizations/OrganizationList";

const Results = ({ prgArray }) => (
  <div>
    <OrganizationsList prgArr={prgArray} />
  </div>
);

export default Results;
