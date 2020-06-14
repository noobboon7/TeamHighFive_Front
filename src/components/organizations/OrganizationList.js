import React from "react";
import OrgCard from "./OrgCard";

const OrganizationList = ({
  organizations_array
}) => ( <
  div className="container mt-5" ><div className="row"> {
    organizations_array.map((organization) => ( <
      OrgCard organization = {
        organization
      }
      />
    ))
  } <
  /div></div>
);

export default OrganizationList;
