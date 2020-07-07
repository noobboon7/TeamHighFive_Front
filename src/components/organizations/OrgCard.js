import React from "react";


import {Col,Card, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'


//add color "info" to button and height
const OrgCard = ({program}) => {
  function formatDescription() {
    let newString = program.description.split(" ").slice(0, 10);
    newString = newString.join(" ");
    return newString + "...";
  }



  return (
    <Col className="mb-5 col-lg-4 d-flex align-items-stretch organizationList-col" lg = {4}sm = {6} >
      <Card className="border-0">
        <Card.Img className = "d-none"src = {program.logo}/>
        <Card.Body >
            <Card.Title> {program.name} </Card.Title>
            <Card.Text > {formatDescription()} </Card.Text>
            <Card.Link className="mx-0" href={program.url}>
              {program.url}
            </Card.Link>
        </Card.Body >
        <Card.Footer className="text-center">
          <Link to={`/organization/${program.organization_id}`} className="learnmore" >
              <span>Learn More!</span>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default OrgCard;
