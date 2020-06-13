import React from "react";
import OrganizationList from "./OrganizationList";
import { Container, Row } from "react-bootstrap";

const Organizations = () => (
  <Container>
    <Row>
      <OrganizationList />
    </Row>
  </Container>
);
export default Organizations;
