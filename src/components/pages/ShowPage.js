import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import { Row, Col } from "react-bootstrap";
import PlaceHolderLogo from "../../static/organization-placeholder.png";

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
    fetchOrganization();
  }, []);

  let programs = organization.programs;
  let lis = programs ? (
    programs.map((program) => (
      <Col md="4">
        <div
          key={program.id}
        >
          <h4 className="display-6">{program.name}</h4>
          <ul className="list-unstyled">
            <li>{program.age_group}</li>
            <li>{program.duration}</li>
            <li>{program.hours}</li>
            <li>{program.start_season}</li>
            <li><a className="btn btn-warning" href={program.program_url} target="_blank">Learn more</a></li>
          </ul>
        </div>
      </Col>
    ))
  ) : (
    <></>
  );
  return (
    <div>
      <Banner name={organization.name} />
      <div className="container mt-5">
        <Row className="mb-5">
          <Col md="4">
          <img src={organization.logo == null ? PlaceHolderLogo : organization.logo } alt={organization.name} className="img-fluid"></img>
          <p>{console.log("organization",organization)}</p>
          </Col>
          <Col md="6" className="bg-white px-5 py-3">
          <h1>{organization.name}</h1>
          <p>{organization.description}</p>
          </Col>
        </Row>

        <Row>
          {lis}
        </Row>
      </div>
      {/* <Row>
        <ul>{lis}</ul>
      </Row> */}
    </div>
  );
};

export default ShowPage;
