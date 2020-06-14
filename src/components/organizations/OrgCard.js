import React from "react";
import { Col, Card } from "react-bootstrap";
// import styles from "./OrgCard.module.css";
// import {Link} from 'react-router-dom'

const OrgCard = ({ program }) => {
  function formatDescription() {
    let newString = program.description.split(" ").slice(0, 10);
    newString = newString.join(" ");
    return newString + "...";
  }

  return (
    <Col className="mb-5" lg={4} sm={6}>
      <Card className="border-0">
        <Card.Img className="d-none" src={program.logo} />
        <Card.Body>
          <Card.Title> {program.name} </Card.Title>
          <Card.Text> {formatDescription()} </Card.Text>
          <Card.Link className="mx-0" href={program.url}>
            {program.url}
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrgCard;
