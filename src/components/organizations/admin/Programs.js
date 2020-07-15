import React from "react";
import { Container, Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faDatabase, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const OrganizationAdminPrograms = () => {
  return (
    <Container fluid className="mt-4">
      <h4>Welcome Back, Organization Name</h4>
      <Row className="mt-4">
        <Col md="3" className="admin-sidebar">
          <Card>
            <Card.Header>Settings</Card.Header>
            <Card.Body>
              <ListGroup variant="flush" defaultActiveKey="#edit-programs">
                <ListGroup.Item href="#edit-profile"><Link to="/admin/profile"><FontAwesomeIcon icon={faUser} className="mr-4" />Edit Profile</Link></ListGroup.Item>
                <ListGroup.Item href="#edit-information"><Link to="/admin/information"><FontAwesomeIcon icon={faInfoCircle} className="mr-4" />Information</Link></ListGroup.Item>
                <ListGroup.Item action href="#edit-programs" variant="info"><Link to="/admin/programs"><FontAwesomeIcon icon={faCog} className="mr-4" />Programs</Link></ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faDatabase} className="mr-4" />Engagment Data</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md="9" className="admin-profile-form">
          <Row>
            <Col md="12" className="mt-4">
            <Card>
              <Card.Header>Program</Card.Header>
              <Card.Body>
                List of Programs
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default OrganizationAdminPrograms;
