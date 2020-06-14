import React from "react";
import OrgCard from "./OrgCard";

const OrganizationList = ({ organizations }) =>
  organizations.map((organization) => <OrgCard organization={organization} />);

export default OrganizationList;
