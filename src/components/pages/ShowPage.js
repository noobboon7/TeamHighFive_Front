import React, {useState, useEffect} from "react";
import Layout from "../../layout/Layout.js";

const ShowPage = (props) => {

  const [organization, setOrganization] = useState({});
  const {
    match: { params },
  } = props;

  let id = parseInt(params.id);
  console.log(id); 

  async function fetchOrganization(){

    let org = await fetch(`https://connection-youth.herokuapp.com/organizations/${id}`)

    let data = await org.json(); 
    setOrganization(data); 
  }

  
  fetchOrganization();
  
    return (
      <div>
        <h1>{organization.name}</h1>
      </div>
    )
};

export default ShowPage;
