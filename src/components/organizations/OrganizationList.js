import React from "react";
import OrgCard from "./OrgCard";

const OrganizationList = ({prgArr}) => (
  <div className="container mt-5 organizationList" >
    <div className="row">
      {prgArr.map((program, idx) => (
        <OrgCard key={idx} program = {program}/>
        ))
      }
    </div>
  </div>
);

export default OrganizationList;
