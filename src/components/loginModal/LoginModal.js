import React from "react";
import { Modal, Form, Button, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginModal = ({
  handleSubmit,
  handleEmail,
  handlePassword,
  email,
  password,
  show,
  onHide,
}) => {
  return (
    <Modal show={show} onHide={onHide} keyboard={false} centered>
    <Modal.Header closeButton className="position-absolute border-0 modal-close-btn">
      {
        // <Modal.Title>Organization Login</Modal.Title>
      }
    </Modal.Header>
    <Modal.Body>
      <Tabs defaultActiveKey="signin" transition={false} id="modal-tabs-organization" className="flex-row w-100 org-tabs-panels">
        <Tab eventKey="signin" title="Login">
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  onChange={handleEmail}
                  value={email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                  value={password}
                />
              </Form.Group>
              <Form.Group controlId="formRequest">
                <Button variant="link">forgot password/username?</Button>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button type="submit" variant="secondary">
                Login
              </Button>
          </Form>
        </Tab>
        <Tab eventKey="register" title="Register">
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>
            <Form.Group controlId="formOrgEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formOrgPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="**********"
              />
            </Form.Group>
            <Form.Group controlId="formOrgRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat Password"
              />
            </Form.Group>
            <Form.Group controlId="formOrgName">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control type="text" placeholder="Organization Name" />
            </Form.Group>
            <Button variant="primary">Register</Button>
          </Form>
        </Tab>
      </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/admin/profile">Admin Profile</Link>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
