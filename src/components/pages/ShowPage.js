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
  }, [id]);

  let programs = organization.programs;
  let lis = programs ? (
    programs.map((program) => (
      <Col md="4">
        <div
          key={program.id}
        >
          <h4 className="display-6">{program.name}</h4>
          <div className="row">
            <div className="col-lg-6"><span className="intro-lead">Age Group:</span></div>
            <div className="col-lg-6">{program.age_group}</div>
          </div>

          <div className="row">
            <div className="col-lg-6"><span className="intro-lead">Season:</span></div>
            <div className="col-lg-6">{program.start_season === 'N/A' ? 'Year-Round' : program.start_season}</div>
          </div>

          <div className="row">
            <div className="col-lg-6"><span className="intro-lead">Duration:</span></div>
            <div className="col-lg-6">{program.duration}</div>
          </div>

          <div className="row">
            <div className="col-lg-6"><span className="intro-lead">Hours:</span></div>
            <div className="col-lg-6">{program.hours}</div>
          </div>

          <a className="btn btn-warning" href={program.program_url} target="_blank" rel="noopener noreferrer">Learn more</a>

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

        <Row className="d-flex align-items-stretch">
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
