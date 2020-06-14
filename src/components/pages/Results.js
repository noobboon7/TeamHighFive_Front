import React from "react";

import OrganizationsList from "../organizations/OrganizationList";

const Results = ({ organizations }) => (
  <div>
    <OrganizationsList organizations={organizations} />
  </div>
);

export default Results;
