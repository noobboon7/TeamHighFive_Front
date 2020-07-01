import React, { useState } from "react";
import { Card, InputGroup, Button, FormControl, Form } from "react-bootstrap";

const Login = ({
  setHidden,
  handleSubmit,
  handleEmail,
  handlePassword,
  email,
  password,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="close" onClick={setHidden(true)}>
          X
        </div>
        <Card.Title>Organization Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              aria-label="Small"
              type="email"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Email"
              name="email"
              onChange={handleEmail}
              value={email}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              aria-label="Small"
              type="password"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Password"
              name="password"
              onChange={handlePassword}
              value={password}
            />
          </InputGroup>
          <Button type="submit">Login</Button>
        </Form>
        <Card.Link href="https://forms.gle/8UpNNNfrWh5Exnvd9" target="_blank">
          Register
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Login;
