import React from "react";
import OrgCard from "./OrgCard";
import { organizations } from "../../data/organizations";

const OrganizationList = () =>
  organizations.map((organization) => <OrgCard organization={organization} />);

export default OrganizationList;
