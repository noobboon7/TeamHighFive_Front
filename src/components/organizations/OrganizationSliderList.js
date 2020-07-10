import React from "react";


import {Col,Card} from "react-bootstrap";
// import {Link} from 'react-router-dom'

//add color "info" to button and height
const OrganizationSliderList = ({program}) => {
  function formatDescription() {
    let newString = program.description.split(" ").slice(0, 10);
    newString = newString.join(" ");
    return newString + "...";
  }

  return (
    <Col className="d-flex align-items-stretch organizationList-col">
      <Card className="border-0">
        <Card.Img className = "d-none"src = {program.logo}/>
        <Card.Body >
            <Card.Title> {program.name} </Card.Title>
            <Card.Text > {formatDescription()} </Card.Text>
            <Card.Link className="mx-0 learnmore" href = {program.url}>
              Learn More
            </Card.Link>
        </Card.Body >
      </Card>
    </Col>
  );
};

export default OrganizationSliderList;
