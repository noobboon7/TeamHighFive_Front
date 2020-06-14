import React from "react";
import OrgCard from "./OrgCard";

const OrganizationList = ({ organizations_array }) => (
  <div style={{ display: "flex" }}>
    {organizations_array.map((organization) => (
      <OrgCard organization={organization} />
    ))}
  </div>
);

export default OrganizationList;
