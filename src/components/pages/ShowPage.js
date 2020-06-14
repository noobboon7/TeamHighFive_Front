import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import { Row, Col } from "react-bootstrap";

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
      <Col>
        <div
          key={program.id}
          // style={{
          //   flexDirection: "column",
          //   flexWrap: "wrap",
          //   backgroundColor: "grey",
          //   height: "16em",
          //   width: "18em",
          //   color: "white",
          //   justifyContent: "center",
          //   textAlign: "center",
          //   padding: "5px",
          //   margin: "5px",
          // }}
        >
          <h3>{program.name}</h3>
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
        <Row>
          <h1>{organization.name}</h1>
          <p>{organization.description}</p>
        </Row>
      </div>
      {/* <Row>
        <ul>{lis}</ul>
      </Row> */}
    </div>
  );
};

export default ShowPage;
