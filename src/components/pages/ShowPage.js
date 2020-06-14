import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";

const ShowPage = (props) => {
  const [organization, setOrganization] = useState({});
  const {
    match: { params },
  } = props;

  let id = parseInt(params.id);
  console.log(id);

  useEffect(() => {
    async function fetchOrganization() {
      let org = await fetch(
        `https://connection-youth.herokuapp.com/organizations/${id}`
      );

      let data = await org.json();
      setOrganization(data);
    }
  }, [organization]);

  return (
    <div>
      <Banner name={organization.name} />
    </div>
  );
};

export default ShowPage;
