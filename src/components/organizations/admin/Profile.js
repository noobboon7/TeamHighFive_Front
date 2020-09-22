import React from "react";
import { Container, Row, Col, Card, ListGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faDatabase, faInfoCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const OrganizationAdminProfile = () => {
  return (
    <Container fluid className="mt-4">
      <h4>Welcome Back, Organization Name</h4>
      <Row className="mt-4">
        <Col md="3" className="admin-sidebar">
          <Card>
            <Card.Header>Settings</Card.Header>
            <Card.Body>
              <ListGroup variant="flush" defaultActiveKey="#edit-profile">
              <ListGroup.Item action href="#edit-profile" variant="info"><Link to="/admin/profile"><FontAwesomeIcon icon={faUser} className="mr-4" />Edit Profile</Link></ListGroup.Item>
              <ListGroup.Item><Link to="/admin/information"><FontAwesomeIcon icon={faInfoCircle} className="mr-4" />Information</Link></ListGroup.Item>
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
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Text className="text-muted">
                          <img src="https://picsum.photos/90" alt="logo" class="mr-2 rounded-circle"></img>
                          <br/>File types (.jpg, .gif, .png, .svg) max size 10MB
                        </Form.Text>
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.File id="formControlLogoFile" label="Upload Logo" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="organizationName">
                      <Form.Label>Organization Name</Form.Label>
                      <Form.Control type="text" placeholder="Organization Name" />
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} controlId="foundedDate">
                      <Form.Label>Founded Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/DD/YYYY" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="organizationEIN">
                        <Form.Label>EIN Number<FontAwesomeIcon icon={faCheckCircle} className="text-success ml-2" /></Form.Label>
                        <Form.Control type="text" placeholder="Organization's EIN#" />
                      </Form.Group>
                    </Form.Row>
                    <Button variant="success" type="submit">
                      Save
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" className="d-flex align-items-stretch">
            <Card className="w-100">
              <Card.Header>Login</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>New Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter new email address" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="**********" />
                  </Form.Group>
                  <Form.Group controlId="formRepeatPassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type="password" placeholder="**********" />
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
              <Card.Header>Contact Information</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Contact Name</Form.Label>
                      <Form.Control placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Contact Email</Form.Label>
                      <Form.Control type="email" placeholder="name@domain.com" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="000-000-000" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="c/o, apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

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

export default OrganizationAdminProfile;
