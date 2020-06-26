import React, { useContext } from "react";
import {fetchContext} from '../../fetchContext'
import OrgCard from "./OrgCard";


const OrganizationList = () => {
  const contextArrays = useContext(fetchContext);
	let organizations = contextArrays.organizations;
  return(
    <div className="container mt-5 organizationList" >
      <div className="row">
        {organizations.map((program, idx) => (
          <OrgCard key={idx} program = {program}/>
          ))
        }
      </div>
    </div>
  )
};

export default OrganizationList;
