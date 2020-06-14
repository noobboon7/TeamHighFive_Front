import React from "react";
import OrgCard from "./OrgCard";

const OrganizationList = ({prgArr}) => ( 
  <div className="container mt-5" >
    <div className="row"> 
      {prgArr.map((program, idx) => ( 
        <OrgCard key={idx} program = {program}/>
        ))
      } 
    </div>
  </div>
);

export default OrganizationList;
