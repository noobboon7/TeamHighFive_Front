import React from "react";
import { Col, Card } from "react-bootstrap";
import styles from "./OrgCard.module.css";

const OrgCard = ({ organization }) => (
  <Col lg={4} sm={6}>
    <Card
      style={{
        width: "18rem",
        height: "16rem",
        justifyContent: "space-around",
        alignContent: "center",
        margin: "5vh",
      }}
    >
      <Card.Img className={styles.img} variant="top" src={organization.logo} />
      <Card.Body>
        <Card.Title>{organization.name}</Card.Title>
        <Card.Text>{organization.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">{organization.url}</Card.Link>
      </Card.Body>
    </Card>
  </Col>
);

export default OrgCard;
