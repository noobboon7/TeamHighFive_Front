import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const LoginModal = ({
  handleSubmit,
  handleEmail,
  handlePassword,
  email,
  password,
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Organization Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="secondary">
            Login
          </Button>
          <Button variant="primary">Register</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default LoginModal;
