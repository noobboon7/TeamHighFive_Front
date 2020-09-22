import React from "react";
import { Container, Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faDatabase, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const OrganizationAdminInformation = () => {
  return (
    <Container fluid className="mt-4">
      <h4>Welcome Back, Organization Name</h4>
      <Row className="mt-4">
        <Col md="3" className="admin-sidebar">
          <Card>
            <Card.Header>Settings</Card.Header>
            <Card.Body>
              <ListGroup variant="flush" defaultActiveKey="#edit-information">
                <ListGroup.Item href="#edit-profile"><Link to="/admin/profile"><FontAwesomeIcon icon={faUser} className="mr-4" />Edit Profile</Link></ListGroup.Item>
                <ListGroup.Item action href="#edit-information" variant="info"><Link to="/admin/information"><FontAwesomeIcon icon={faInfoCircle} className="mr-4" />Information</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/admin/programs"><FontAwesomeIcon icon={faCog} className="mr-4" />Programs</Link></ListGroup.Item>
                <ListGroup.Item><FontAwesomeIcon icon={faDatabase} className="mr-4" />Engagment Data</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md="9" className="admin-profile-form">
          <Row>
            <Col md="6" className="d-flex align-items-stretch">
              <Card className="w-100">
                <Card.Header>Minority business enterprise</Card.Header>
                <Card.Body>
                  <Card.Text>For businesses which are at least 51% owned, operated and controlled on a daily basis by one or more (in combination) American citizens of the following ethnic minority and/or gender (e.g. woman-owned) and/or military veteran classifications:</Card.Text>
                  <Form>
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="No" type={type} id={`inline-${type}-2`} />
                      </div>
                    ))}
                    <Button variant="success" type="submit">
                      Save
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" className="d-flex align-items-stretch">
            <Card className="w-100">
              <Card.Header>Links</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formWebsite">
                    <Form.Label>Organization's Website</Form.Label>
                    <Form.Control placeholder="domain.org" />
                  </Form.Group>
                  <Form.Group controlId="formFacebook">
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control placeholder="facebook.com" />
                  </Form.Group>
                  <Form.Group controlId="formInstagram">
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control placeholder="instagram.com" />
                  </Form.Group>
                  <Form.Group controlId="formTwitter">
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control placeholder="twitter.com" />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="mt-4">
            <Card>
              <Card.Header>Organization's Banner Image</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Text className="text-muted">
                      <img src="https://picsum.photos/800/300" alt="logo" class="w-100"></img>
                      <p>Upload an image file types (.jpg, .gif, .png, .svg) or video file types (.mp4, .mov) representing the organization with the max width of 1024px / 10MB</p>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.File id="formControlLogoFile" label="Upload Banner Image" />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default OrganizationAdminInformation;
