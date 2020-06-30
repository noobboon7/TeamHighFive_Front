import React, { useState } from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";

const Login = ({ setHidden }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="close" onClick={setHidden(true)}>
          X
        </div>
        <Card.Title>Organization Login</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <InputGroup size="sm" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Password"
          />
        </InputGroup>
        <Button href="#">Login</Button>
        <Card.Link href="https://forms.gle/8UpNNNfrWh5Exnvd9">
          Register
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Login;
